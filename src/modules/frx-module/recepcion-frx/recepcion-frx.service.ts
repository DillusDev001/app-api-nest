import { Injectable } from '@nestjs/common';
import { RecepcionFrxDto } from './dto/recepcion-frx.dto';
import { UpdateRecepcionFrxDto } from './dto/update-recepcion-frx.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { RecepcionFrx } from './entities/recepcion-frx.entity';
import { CotizacionFrxService } from '../cotizacion-frx/cotizacion-frx.service';

@Injectable()
export class RecepcionFrxService {
  constructor(
    @InjectRepository(RecepcionFrx) private recepcionRepository: Repository<RecepcionFrx>,
    private cotizacionFrxService: CotizacionFrxService
  ) { }

  async create(recepcionFrxDto: RecepcionFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.recepcionRepository.create(recepcionFrxDto);
    await this.recepcionRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'RecepcionFrx se ha agregado correctamente.';

    return serviceResult;
  }

  async find(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.recepcionRepository
      .createQueryBuilder()
      .where("cod_cotizacion like :cod_cotizacion", { cod_cotizacion: '%' + cod_cotizacion + '%' })
      .getMany()

    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultCotizacion = await this.cotizacionFrxService.find(result[i].cod_cotizacion);

        if (resultCotizacion.boolean) {
          result[i]['cotizacion'] = resultCotizacion.data;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' cotización encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.recepcionRepository.find();
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultCotizacion = await this.cotizacionFrxService.find(result[i].cod_cotizacion);

        if (resultCotizacion.boolean) {
          result[i]['cotizacion'] = resultCotizacion.data;
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' cotización(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findMiLista(user_asignado: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.recepcionRepository.find({where: {user_asignado}});
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultCotizacion = await this.cotizacionFrxService.find(result[i].cod_cotizacion);

        if (resultCotizacion.boolean) {
          result[i]['cotizacion'] = resultCotizacion.data;
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' cotización(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_cotizacion: string, updateRecepcionFrxDto: UpdateRecepcionFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.recepcionRepository.update(cod_cotizacion, updateRecepcionFrxDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = updateAuth.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha actualizado correctamente';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.recepcionRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' cotización(es) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
