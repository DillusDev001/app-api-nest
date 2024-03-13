import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private readonly authUtilsService: AuthUtilsService
  ) { }

  async authLogin(user: string, password: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const usuario = await this.authRepository.findOne({ where: { user: user } });
    if (!usuario) {
      serviceResult.message = 'El usuario no existe.';
      return serviceResult;
    }

    const compare = await this.authUtilsService.comparePasswords(password, usuario.password);

    if (compare) {
      serviceResult.message = 'Usuario encontrado.';
    } else {
      serviceResult.message = 'Usuario y/o contraseña son incorrectos.';
    }

    serviceResult.boolean = compare;

    return serviceResult;
  }

  async create(authDto: AuthDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar auth a DB
    const newAuth = this.authRepository.create(authDto);
    await this.authRepository.save(newAuth);
    serviceResult.object = newAuth;

    return serviceResult;
  }

  async update(user: string, updateAuthDto: UpdateAuthDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.authRepository.update(user, updateAuthDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'La contraseña no se ha podido actualizar.';
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async find(user: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.authRepository.find({ where: { user: user } });

    if (result.length === 1) {
      serviceResult.boolean = true;
      serviceResult.object = result[0];
      serviceResult.message = '1 usuario encontrado.';
    } else if (result.length === 0) {
      serviceResult.message = '0 usuarios encontrado.';
    } else {
      serviceResult.message = 'Muchos usuarios encontrados.';
    }

    serviceResult.number = result.length;

    return serviceResult;
  }


  












  /*findAll() {
    return `This action returns all auth`;
  }

  findOne(user: string, password: string) {
    return this.authRepository.findOne({
      where: {
        user,
        password
      }
    });
    //return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }*/
}
