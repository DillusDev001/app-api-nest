import { Injectable } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { EmpresaService } from '../empresa/empresa.service';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona) private personaRepository: Repository<Persona>,
    private empresaService: EmpresaService
  ) { }

  async create(personaDto: PersonaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.personaRepository.create(personaDto);
    await this.personaRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Persona se ha agregado correctamente.';

    return serviceResult;
  }

  async find(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    //const result = await this.personaRepository.findBy({ nombre_persona: '%' + value + '%' });

    const result = await this.personaRepository
      .createQueryBuilder('persona')
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    let data = [];

    if (count > 0) {
      for (let i = 0; i < count; i++) {        
        if (result[i].id_empresa !== 0) {
          try {
            const resultEmpresa = await this.empresaService.findId(result[i].id_empresa);

            if (resultEmpresa.boolean) {
              result[i].id_empresa = resultEmpresa.object;
            } 
          } catch (error) {
            serviceResult.message = serviceResult.message + ' ' + error;
          }
        }
      }

      serviceResult.boolean = true;
      serviceResult.data = result;
    } 
    
    serviceResult.message = count + ' persona(s) encontrada(s).';
    serviceResult.number = count;

    return serviceResult;
  }

  async findByID(id_persona: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    //const result = await this.personaRepository.findBy({ nombre_persona: '%' + value + '%' });

    const result = await this.personaRepository.findBy({ id_persona });

    const count = result.length;

    let data = [];

    if (count > 0) {
      for (let i = 0; i < count; i++) {        
        if (result[i].id_empresa !== 0) {
          try {
            const resultEmpresa = await this.empresaService.findId(result[i].id_empresa);

            if (resultEmpresa.boolean) {
              result[i].id_empresa = resultEmpresa.object;
            } 
          } catch (error) {
            serviceResult.message = serviceResult.message + ' ' + error;
          }
        }
      }

      serviceResult.boolean = true;
      serviceResult.data = result;
    } 
    
    serviceResult.message = count + ' persona(s) encontrada(s).';
    serviceResult.number = count;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.personaRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' persona(s) encontrada(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.personaRepository.update(id, updatePersonaDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.personaRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' persona(s) eliminada(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
