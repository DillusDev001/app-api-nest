import { Injectable } from '@nestjs/common';
import { MuestraParametroFrxDto } from './dto/muestra-parametro-frx.dto';
import { UpdateMuestraParametroFrxDto } from './dto/update-muestra-parametro-frx.dto';
import { MuestraParametroFrx } from './entities/muestra-parametro-frx.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { ParametroFrxService } from '../parametro-frx/parametro-frx.service';
import { ParametroFrxController } from '../parametro-frx/parametro-frx.controller';

@Injectable()
export class MuestraParametroFrxService {
  constructor(
    @InjectRepository(MuestraParametroFrx) private muestraParametroFrxRepository: Repository<MuestraParametroFrx>,
    private parametroFrxService: ParametroFrxService
  ) { }

  async addMultiple(array: MuestraParametroFrxDto[]): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const multiple = await this.muestraParametroFrxRepository
      .createQueryBuilder()
      .insert()
      .into(MuestraParametroFrx)
      .values(array)
      .execute();

    const rows = multiple.raw.affectedRows;
    serviceResult.boolean = rows > 0 ? true : false;
    serviceResult.message = rows > 0 ? rows + ' muestra parámetro agregada(s).' : 'No se han agregado muestra parámetro.';
    serviceResult.number = rows;

    return serviceResult;
  }

  async findAll(cod_cotizacion: string, muestra_sec: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.muestraParametroFrxRepository.findBy({ cod_cotizacion, muestra_sec });
    const count = result.length;

    if(count > 0){
      for(let i = 0; i < count; i++){
        //const id
        const resultMuestra = await this.parametroFrxService.findById(result[i].id_parametro);

        if(resultMuestra.boolean){
          result[i]['parametro'] = resultMuestra.data[0];
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' muestra parámetro encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async remove(cod_cotizacion: string, muestra_sec: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.muestraParametroFrxRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
