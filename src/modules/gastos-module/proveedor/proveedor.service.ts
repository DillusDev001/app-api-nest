import { Injectable } from '@nestjs/common';
import { ProveedorDto } from './dto/proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class ProveedorService {

  constructor(@InjectRepository(Proveedor) private proovedorRepository: Repository<Proveedor>,) { }

  async create(proveedorDto: ProveedorDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.proovedorRepository.create(proveedorDto);
    await this.proovedorRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Proveedor se ha agregado correctamente.';

    return serviceResult;
  }

  async find(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    //const result = await this.proovedorRepository.findBy({ nombre_persona: '%' + value + '%' });

    const result = await this.proovedorRepository
      .createQueryBuilder('persona')
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.data = result;
    serviceResult.message = count + ' proovedor(es) encontrado(s).';
    serviceResult.number = count;

    return serviceResult;
  }

  async findById(id_proveedor: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.proovedorRepository.findBy({id_proveedor});

    const count = result.length;

    serviceResult.boolean = count === 1 ? true : false;
    serviceResult.message = count + ' proveedor(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.proovedorRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' proovedor(es) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updateServicioDto: ProveedorDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const update = await this.proovedorRepository.update(id, updateServicioDto);

    serviceResult.boolean = update.affected === 1 ? true : false;
    serviceResult.message = update.affected + ' proovedor(es) actualizado(s).';
    serviceResult.number = update.affected;
    serviceResult.object = update;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.proovedorRepository.delete(id);

    serviceResult.boolean = remove.affected === 1 ? true : false;
    serviceResult.message = remove.affected + ' proovedor(es) eliminado(s).';
    serviceResult.number = remove.affected;



    return serviceResult;
  }
}
