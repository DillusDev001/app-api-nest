import { Injectable } from '@nestjs/common';
import { ContactoDto } from './dto/contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Repository, Connection } from 'typeorm';
import { Contacto } from './entities/contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class ContactoService {

  constructor(
    @InjectRepository(Contacto)
    private contactoRepository: Repository<Contacto>,
    private readonly connection: Connection // Inyecta la conexión
  ) { }

  // SELECCIONAR
  async findAll(user: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.contactoRepository.find({ where: { user } });

    if (result.length > 0) {
      serviceResult.boolean = true;
      serviceResult.message = result.length + ' contacto(s) encontrado(s).';
      serviceResult.number = result.length;
      serviceResult.data = result;
    } else {
      serviceResult.message = '0 contacto(s) encontrado(s).';
    }

    return serviceResult;
  }

  // AGREGAR
  async addMultiple(user: string, array: ContactoDto[]): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;


    const multiple = await this.contactoRepository
      .createQueryBuilder()
      .insert()
      .into(Contacto)
      .values(array)
      .execute();

    const rows = multiple.raw.affectedRows;
    serviceResult.boolean = rows > 0 ? true : false;
    serviceResult.message = rows > 0 ? rows + ' contacto(s) agregado(s).' : 'No se han agregado contactos.';
    serviceResult.number = rows;

    return serviceResult;
  }

  // ELIMINAR
  async remove(user: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const remove = await this.contactoRepository.delete({ user: user });

    if (remove.affected > 0) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' contacto(s) eliminado(s).';
      serviceResult.number = remove.affected;
    } else {
      serviceResult.message = 'No se han eliminado contactos.';
    }

    return serviceResult;
  }
}
