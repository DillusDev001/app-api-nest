import { Injectable } from '@nestjs/common';
import { CotizacionGeneralSubServicioDto } from './dto/cotizacion-general-sub-servicio.dto';
import { UpdateCotizacionGeneralSubServicioDto } from './dto/update-cotizacion-general-sub-servicio.dto';
import { CotizacionGeneralSubServicio } from './entities/cotizacion-general-sub-servicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { SubServicioService } from 'src/modules/servicio-module/sub-servicio/sub-servicio.service';

@Injectable()
export class CotizacionGeneralSubServicioService {

  constructor(
    @InjectRepository(CotizacionGeneralSubServicio) private cotizacionGeneralSubServicioRepository: Repository<CotizacionGeneralSubServicio>,
    private subServicioService: SubServicioService
  ) { }

  async addMultiple(array: CotizacionGeneralSubServicio[]): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const multiple = await this.cotizacionGeneralSubServicioRepository
      .createQueryBuilder()
      .insert()
      .into(CotizacionGeneralSubServicio)
      .values(array)
      .execute();

    const rows = multiple.raw.affectedRows;
    serviceResult.boolean = rows > 0 ? true : false;
    serviceResult.message = rows > 0 ? rows + ' sub servicio(s) agregada(s).' : 'No se han agregado muestra parámetro.';
    serviceResult.number = rows;

    return serviceResult;
  }

  async findAll(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.cotizacionGeneralSubServicioRepository.findBy({ cod_cotizacion });
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultMuestra = await this.subServicioService.find(result[i].id_sub_servicio);

        if (resultMuestra.boolean) {
          result[i]['sub_servicio'] = resultMuestra.data[0];
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' sub servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async remove(cod_cotizacion: string, muestra_sec: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.cotizacionGeneralSubServicioRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' sub servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
  
}
