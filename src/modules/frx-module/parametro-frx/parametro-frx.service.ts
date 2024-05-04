import { Injectable } from '@nestjs/common';
import { ParametroFrxDto } from './dto/parametro-frx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParametroFrx } from './entities/parametro-frx.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { UpdateParametroFrxDto } from './dto/update-parametro-frx.dto';

@Injectable()
export class ParametroFrxService {
  constructor(@InjectRepository(ParametroFrx) private parametroRepository: Repository<ParametroFrx>) { }

  async create(parametroDto: ParametroFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.parametroRepository.create(parametroDto);
    await this.parametroRepository.save(newCode);

    console.log(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Parámetro se ha agregado correctamente.';

    return serviceResult;
  }

  async find(value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.parametroRepository
      .createQueryBuilder()
      .where("nombre like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' parametro(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findById(id_parametro: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.parametroRepository.findBy({id_parametro});

    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' parametro(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.parametroRepository.find();
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' parametro(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(id: number, updateParametroDto: UpdateParametroFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.parametroRepository.update(id, updateParametroDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.parametroRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' servicio(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
