import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

  async create(usuarioDto: UsuarioDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Verificar que no exista user y ci
    const usuario = await this.exists(usuarioDto.user, usuarioDto.ci);
    if (usuario) {
      serviceResult.message = 'El email y/o el ci ya existen.';
      return serviceResult;
    }

    // Agregar usuario a DB
    const newUsuario = this.usuarioRepository.create(usuarioDto)

    const savedUsuario = await this.usuarioRepository.save(newUsuario);

    serviceResult.boolean = true;
    serviceResult.message = 'Usuario agregado correctamente.';

    return serviceResult;
  }

  async exists(user: string, ci: string) {
    const count = await this.usuarioRepository
      .createQueryBuilder()
      .where('user = :user OR ci = :ci', { user, ci })
      .getCount();

    return count >= 1 ? true : false;
  }

  async find(user: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.usuarioRepository.find({ where: { user: user } });

    if (result.length === 1) {
      serviceResult.boolean = true;
      serviceResult.data = result;
      serviceResult.message = '1 usuario encontrado.';
    } else if (result.length === 0) {
      serviceResult.message = '0 usuarios encontrado.';
    } else {
      serviceResult.message = 'Muchos usuarios encontrados.';
    }

    serviceResult.number = result.length;

    return serviceResult;
  }

  async remove(user: string, ci: string) {
    const remove = await this.usuarioRepository.delete(user);

    return remove.affected === 1 ? true : false;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const a = await this.usuarioRepository.find();
    const count = a.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' usuario(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = a;

    return serviceResult;
  }




















  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }


}
