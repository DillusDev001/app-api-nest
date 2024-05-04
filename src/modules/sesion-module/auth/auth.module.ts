import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Auth]), TypeOrmModule.forFeature([Usuario])],
  controllers: [AuthController],
  providers: [AuthService, AuthUtilsService, UsuarioService],
})
export class AuthModule { }
