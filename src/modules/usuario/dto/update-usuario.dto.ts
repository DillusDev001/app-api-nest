import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './usuario.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioDto) {}
