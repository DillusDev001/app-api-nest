import { Injectable } from '@nestjs/common';
import { CuentaDto } from './dto/cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class CuentaService {

  constructor(@InjectRepository(Cuenta) private cuentaRepository: Repository<Cuenta>) { }

  async create(cuentaDto: CuentaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.cuentaRepository.create(cuentaDto);
    await this.cuentaRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Cuenta se ha agregado correctamente.';

    return serviceResult;
  }

  async find(id_servicio: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.cuentaRepository.findBy({ id_servicio });
    const count = result.length;

    if (count === 1) {
      serviceResult.boolean = true;
      serviceResult.message = count + ' cuenta(s) encontrada(s).';
      serviceResult.number = count;
      serviceResult.data = result;
    }

    return serviceResult;
  }

  async update(id_cuenta: number, updateCuentaDto: UpdateCuentaDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const updateAuth = await this.cuentaRepository.update(id_cuenta, updateCuentaDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(id: number): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.cuentaRepository.delete(id);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' cuenta(s) eliminada(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
