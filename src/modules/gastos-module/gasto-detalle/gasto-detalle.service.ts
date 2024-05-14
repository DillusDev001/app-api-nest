import { Injectable } from '@nestjs/common';
import { GastoDetalleDto } from './dto/gasto-detalle.dto';
import { UpdateGastoDetalleDto } from './dto/update-gasto-detalle.dto';
import { GastoDetalle } from './entities/gasto-detalle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GastoService } from '../gasto/gasto.service';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class GastoDetalleService {

  constructor(
    @InjectRepository(GastoDetalle) private gastoDetalleRepository: Repository<GastoDetalle>,
  ) { }

  async addMultiple(array: GastoDetalle[]): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const multiple = await this.gastoDetalleRepository
      .createQueryBuilder()
      .insert()
      .into(GastoDetalle)
      .values(array)
      .execute();

    const rows = multiple.raw.affectedRows;
    serviceResult.boolean = rows > 0 ? true : false;
    serviceResult.message = rows > 0 ? rows + ' detalle(s) agregado(s).' : 'No se han agregado detalles.';
    serviceResult.number = rows;

    return serviceResult;
  }

  async findAll(codigo_gasto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.gastoDetalleRepository.findBy({ codigo_gasto });
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' detalle(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async remove(codigo_gasto: string, muestra_sec: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.gastoDetalleRepository.delete({ codigo_gasto });

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' detalle(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }

}
