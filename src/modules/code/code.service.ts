import { Injectable } from '@nestjs/common';
import { CodeDto } from './dto/code.dto';
import { UpdateCodeDto } from './dto/update-code.dto';
import { Code } from './entities/code.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class CodeService {

  constructor(@InjectRepository(Code) private codeRepository: Repository<Code>) { }

  async create(codeDto: CodeDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.exists(codeDto.code);
    if (!result) {
      // Agregar usuario a DB
      const newCode = this.codeRepository.create(codeDto);
      await this.codeRepository.save(newCode);

      serviceResult.boolean = true;
      serviceResult.message = 'Code agregado correctamente.';

    } else {
      serviceResult.message = 'El código ya existe.';
    }

    return serviceResult;
  }

  async find(code: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.codeRepository.findBy({ code });

    if (result.length === 1) {
      serviceResult.boolean = true;
      serviceResult.data = result;
      serviceResult.message = '1 code encontrado.';
    } else if (result.length === 0) {
      serviceResult.message = 'El código no es correcto/no existe.';
    } else {
      serviceResult.message = 'Muchos code encontrados.';
    }

    serviceResult.number = result.length;

    return serviceResult;
  }

  async findAll(user: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.codeRepository.findBy({ user });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' code(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }


  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.codeRepository.delete(id);
    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + 'code(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }

  async update(id: number, updateCodeDto: UpdateCodeDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.codeRepository.update(id, updateCodeDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async exists(code: string) {
    const count = await this.codeRepository.countBy({ code })
    return count >= 1 ? true : false;
  }
}
