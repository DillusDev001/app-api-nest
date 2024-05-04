import { Injectable } from '@nestjs/common';
import { SubServicioDto } from './dto/sub-servicio.dto';
import { UpdateSubServicioDto } from './dto/update-sub-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SubServicio } from './entities/sub-servicio.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class SubServicioService {
  constructor(@InjectRepository(SubServicio) private subServicioRepository: Repository<SubServicio>) { }

  async create(subServicioDto: SubServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.subServicioRepository.create(subServicioDto);
    await this.subServicioRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'SubServicio se ha agregado correctamente.';

    return serviceResult;
  }

  async find(id_sub_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.subServicioRepository.findBy({ id_sub_servicio });
    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' sub servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(id_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.subServicioRepository.findBy({ id_servicio });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' sub servicio(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id_sub_servicio: number, id_servicio: number, updateSubServicioDto: UpdateSubServicioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.subServicioRepository.update({ id_sub_servicio, id_servicio }, updateSubServicioDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id_sub_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.subServicioRepository
      .createQueryBuilder()
      .delete()
      .from(SubServicio)
      .where("id_sub_servicio = :id_sub_servicio", { id_sub_servicio })
      .execute()
    // const remove = await this.subServicioRepository.delete(id_sub_servicio);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' sub servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    } else {
      console.log(remove);
      serviceResult.message = String(remove);
    }

    return serviceResult;
  }
}
