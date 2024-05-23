import { Injectable } from '@nestjs/common';
import { OrdenFrxDto } from './dto/orden-frx.dto';
import { UpdateOrdenFrxDto } from './dto/update-orden-frx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { OrdenFrx } from './entities/orden-frx.entity';

@Injectable()
export class OrdenFrxService {
  
  constructor(@InjectRepository(OrdenFrx) private ordenRepository: Repository<OrdenFrx>) { }

  async create(ordenFrxDto: OrdenFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.ordenRepository.create(ordenFrxDto);
    await this.ordenRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Orden se ha agregado correctamente.';

    return serviceResult;
  }

  async find(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.ordenRepository.findBy({ cod_cotizacion });
    const count = result.length;

    if (count === 1) {
      serviceResult.boolean = count === 1 ? true : false;
      serviceResult.message = count + ' orden(s) encontrada(s).';
      serviceResult.number = count;
      serviceResult.data = result;
    }

    return serviceResult;
  }

  async update(cod_cotizacion: string, updateOrdenFrxDto: UpdateOrdenFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateAuth = await this.ordenRepository.update(cod_cotizacion, updateOrdenFrxDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.ordenRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' orden(s) eliminada(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
