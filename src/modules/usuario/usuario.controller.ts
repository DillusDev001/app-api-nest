import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { Usuario } from './entities/usuario.entity';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeUsuarioGetLista, routeUsuarioRegistro } from 'src/shared/utils/api/api.route';
import { AuthDto } from '../auth/dto/auth.dto';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';
import { AuthService } from '../auth/auth.service';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService
  ) { }

  // Registro de Usuario
  @Post()
  async create(@Body() usuarioDto: UsuarioDto): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioRegistro.title, route: routeUsuarioRegistro.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      // Preguntar si se ha agregado correctamente en Usuario
      const resultUsuario = await this.usuarioService.create(usuarioDto);
      if (!resultUsuario.boolean) {
        apiResult.code = HttpStatus.CONFLICT;
        apiResult.message = resultUsuario.message;
        return apiResult;
      }

      apiResult.status = 'correct';
      apiResult.code = HttpStatus.OK;
      apiResult.message = 'Usuario agregado correctamente, ahora debe iniciar sesión.';
      apiResult.boolean = true;
      apiResult.rows = 1;
      apiResult.data = [];
    } catch (usuarioError) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = usuarioError.message + ' - usuarioError';
    }
    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeUsuarioGetLista.title, route: routeUsuarioGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.usuarioService.findAll();

      apiResult.status = 'correct';
      apiResult.code = HttpStatus.OK;
      apiResult.message = result.message;
      apiResult.boolean = true;
      apiResult.rows = result.number;
      apiResult.data = result.data;

    } catch (error) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error.code;
    }

    return apiResult;
  }






















  @Get(':user')
  find(@Param('user') user: string, @Param('password') password: string) {
    return this.usuarioService.find(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':user/:ci')
  remove(@Param('user') user: string, @Param('ci') ci: string) {
    return this.usuarioService.remove(user, ci);
  }
}
