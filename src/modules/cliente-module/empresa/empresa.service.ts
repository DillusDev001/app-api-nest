import { Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto/empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmpresaService {
  constructor(@InjectRepository(Empresa) private empresaRepository: Repository<Empresa>) { }

  async create(empresaDto: EmpresaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.empresaRepository.create(empresaDto);
    await this.empresaRepository.save(newCode);

    serviceResult.data = [newCode.id_empresa];
    serviceResult.boolean = true;
    serviceResult.message = 'Empresa se ha agregado correctamente.';

    return serviceResult;
  }

  async findId(id_empresa: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.empresaRepository.findBy({ id_empresa });

    const count = result.length;

    if (count > 0) {
      serviceResult.boolean = true;
      serviceResult.object = result[0];
      serviceResult.data = result;
    }

    serviceResult.message = count + ' empresa(s) encontrada(s).';
    serviceResult.number = count;

    return serviceResult;
  }

  async find(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.empresaRepository
      .createQueryBuilder()
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' empresa(s) encontrada(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.empresaRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' empresa(s) encontrada(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.empresaRepository.update(id, updateEmpresaDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.empresaRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' empresa(s) eliminada(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
