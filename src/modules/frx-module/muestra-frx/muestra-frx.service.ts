import { Injectable } from '@nestjs/common';
import { MuestraFrxDto } from './dto/muestra-frx.dto';
import { UpdateMuestraFrxDto } from './dto/update-muestra-frx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MuestraFrx } from './entities/muestra-frx.entity';
import { Repository, Connection } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { MuestraParametroFrxService } from '../muestra-parametro-frx/muestra-parametro-frx.service';

@Injectable()
export class MuestraFrxService {
  constructor(
    @InjectRepository(MuestraFrx) private muestraFrxRepository: Repository<MuestraFrx>,
    private muestraParametroFrxService: MuestraParametroFrxService
  ) { }

  async addMultiple(array: MuestraFrxDto[]): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const multiple = await this.muestraFrxRepository
      .createQueryBuilder()
      .insert()
      .into(MuestraFrx)
      .values(array)
      .execute();

    const rows = multiple.raw.affectedRows;
    serviceResult.boolean = rows > 0 ? true : false;
    serviceResult.message = rows > 0 ? rows + ' muestra(s) agregada(s).' : 'No se han agregado muestras.';
    serviceResult.number = rows;

    return serviceResult;
  }

  async findAll(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.muestraFrxRepository.findBy({ cod_cotizacion });
    const count = result.length;

    if(count > 0){
      for(let i = 0; i < count; i++){
        const resultMuestra = await this.muestraParametroFrxService.findAll(result[i].cod_cotizacion, result[i].muestra_sec);

        if(resultMuestra.boolean){
          result[i]['muestra_parametros'] = resultMuestra.data;

          // recuperar datatos
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' muestra(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.muestraFrxRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
