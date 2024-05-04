import { Injectable } from '@nestjs/common';
import { ServicioDto } from './dto/servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class ServicioService {
  constructor(@InjectRepository(Servicio) private servicioRepository: Repository<Servicio>) { }

  async create(servicioDto: ServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.servicioRepository.create(servicioDto);
    await this.servicioRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Servicio se ha agregado correctamente.';

    return serviceResult;
  }

  async find(nombre: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.servicioRepository.findBy({ nombre });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findByIdServicio(id_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.servicioRepository.findBy({ id_servicio });
    const count = result.length;
    
    if(count === 1){
      serviceResult.boolean = true;
      serviceResult.message = count + ' servicio encontrado.';
      serviceResult.number = count;
      serviceResult.data = result;
    }

    return serviceResult;
  }

  async findTipoServicio(id_tipo_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.servicioRepository.findBy({ id_tipo_servicio });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.servicioRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.servicioRepository.update(id, updateServicioDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.servicioRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
