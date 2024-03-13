import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { Auth } from '../auth/entities/auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), TypeOrmModule.forFeature([Auth])],
  controllers: [UsuarioController],
  providers: [UsuarioService, AuthUtilsService, AuthService],
})
export class UsuarioModule { }
