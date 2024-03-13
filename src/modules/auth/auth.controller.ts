import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/shared/utils/media/media.handle';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeAuthForgot, routeAuthLogin } from 'src/shared/utils/api/api.route';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDto } from '../usuario/dto/usuario.dto';
import { AuthUtilsService } from 'src/shared/services/auth-utils.service';

@ApiTags('auth')
// @UseInterceptors(LoggerInterceptor)
@ApiBearerAuth()
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
    private readonly authUtilsService: AuthUtilsService
  ) { }

  // Inicio de sesión
  @Get('login/:user/:password')
  async authLogin(@Param('user') user: string, @Param('password') password: string): Promise<ApiResult> {

    let apiResult = { title: routeAuthLogin.title, route: routeAuthLogin.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      // Buscar en tabla de Auth
      const loginResult = await this.authService.authLogin(user, password);

      if (loginResult.boolean) {
        // Buscar y obtener Datos del Usuario
        try {
          const usuarioResult = await this.usuarioService.find(user);

          if (usuarioResult.boolean) {
            const usuario = usuarioResult.object as UsuarioDto;

            if (usuario.estado === 1) {
              apiResult.status = 'correct';
              apiResult.code = HttpStatus.OK;
              apiResult.message = 'Acceso correcto.';
              apiResult.boolean = true;
              apiResult.rows = 1;
              apiResult.data = [usuarioResult.object];
            } else {
              apiResult.code = HttpStatus.GONE;
              apiResult.message = 'Su cuenta ha sido eliminada. Contáctese con el administrador.';
              apiResult.boolean = false;
              apiResult.rows = 1;
              apiResult.data = [usuarioResult.object];
            }
          } else {
            apiResult.code = HttpStatus.AMBIGUOUS;
            apiResult.message = usuarioResult.message;
            apiResult.boolean = false;
            apiResult.rows = usuarioResult.number;
            apiResult.data = [];
          }
        } catch (usuarioError) {
          apiResult.code = HttpStatus.NOT_FOUND;
          apiResult.message = usuarioError.code;
        }
      } else {
        apiResult.code = HttpStatus.NOT_FOUND;
        apiResult.message = loginResult.message;
      }
    } catch (loginError) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = loginError.code;
    }
    return apiResult;
  }

  // Forgot Password
  @Patch(':user')
  async update(@Param('user') user: string, @Body() updateAuthDto: UpdateAuthDto): Promise<ApiResult> {

    let apiResult = { title: routeAuthForgot.title, route: routeAuthForgot.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    // Obtener el usuario y comparar pregunta con respuesta de updateAuthDto
    // Obtener usuario
    try {
      const authResult = await this.authService.find(user);

      const usuario = authResult.object as AuthDto;

      if (
        usuario.pregunta === updateAuthDto.pregunta &&
        usuario.respuesta === updateAuthDto.respuesta
      ) {
        // encriptar password
        updateAuthDto.password = await this.authUtilsService.hashPassword(updateAuthDto.password);

        // Actualizar contraseña
        try {
          const updateUsuarioResult = await this.authService.update(user, updateAuthDto);

          if (updateUsuarioResult.boolean) {
            apiResult.status = 'correct';
            apiResult.code = HttpStatus.OK;
            apiResult.message = 'Contraseña actualizada correctamente.';
            apiResult.boolean = true;
            apiResult.rows = 1;
            apiResult.data = [];
          } else {
            apiResult.code = HttpStatus.CONFLICT;
            apiResult.message = updateUsuarioResult.message;
          }
        } catch (updateUsuarioError) {
          apiResult.code = HttpStatus.NOT_FOUND;
          apiResult.message = updateUsuarioError.code;
        }
      } else {
        apiResult.code = HttpStatus.NOT_FOUND;
        apiResult.message = 'Pregunta y/o contraeña no coinciden.';
      }
    } catch (authError) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = authError.code;
    }

    return apiResult;
  }



















  /*@Post()
  create(@Body() createAuthDto: AuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('avatar', { storage }))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Get()
  findAll() {
    if (true) throw new HttpException('Not Found', HttpStatus.BAD_REQUEST);
    //return this.authService.findAll();
  }

  @Get(':user/:password')
  findOne(@Param('user') user: string, @Param('password') password: string) {
    return this.authService.findOne(user, password);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }*/
}