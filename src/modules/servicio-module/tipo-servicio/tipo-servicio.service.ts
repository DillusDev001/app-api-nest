import { Injectable } from '@nestjs/common';
import { TipoServicioDto } from './dto/tipo-servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { TipoServicio } from './entities/tipo-servicio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class TipoServicioService {
  constructor(@InjectRepository(TipoServicio) private tipoServicioRepository: Repository<TipoServicio>) { }

  async create(tipoServicioDto: TipoServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newTipo = this.tipoServicioRepository.create(tipoServicioDto);
    await this.tipoServicioRepository.save(newTipo);

    serviceResult.boolean = true;
    serviceResult.message = 'Tipo Servicio se ha agregado correctamente.';

    return serviceResult;
  }

  async find(nombre: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.tipoServicioRepository.findBy({ nombre });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' tipo de servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.tipoServicioRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' tipos de servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updateTipoServicioDto: UpdateTipoServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.tipoServicioRepository.update(id, updateTipoServicioDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.tipoServicioRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' tipo de servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
