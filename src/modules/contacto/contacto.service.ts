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

    // Obtener la cantidad de contacto habidos antes de la transacción
    const n_contactos_before = await this.findAll(user);

    // Eliminar los contactos existentes
    const n_eliminados = await this.remove(user);

    // Agregar los nuevos contactos
    const result = await this.connection.transaction(async manager => {
      for (const element of array) {
        const newEntity = manager.create(Contacto, element);
        await manager.save(newEntity);
      }
    });

    // Obtener la cantidad de contactos insertados nuevos
    const n_contactos_after = await this.findAll(user);

    if ((n_contactos_after).data.length === array.length) {
      serviceResult.boolean = true;
      serviceResult.message = array.length + ' contacto(s) agregado(s).';
      serviceResult.number = array.length;
      serviceResult.data = array;
    } else {
      // Eliminar los contactos insertados
      const eliminados = this.remove(user);
      serviceResult.message = 'No se han agregado contactos.';
    }

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
