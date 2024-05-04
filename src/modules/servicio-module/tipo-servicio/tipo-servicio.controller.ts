import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TipoServicioService } from './tipo-servicio.service';
import { TipoServicioDto } from './dto/tipo-servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeTipoServicioAdd, routeTipoServicioDelete, routeTipoServicioGet, routeTipoServicioLista, routeTipoServicioUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('tipo-servicio')
@Controller('tipo-servicio')
export class TipoServicioController {
  constructor(private readonly tipoServicioService: TipoServicioService) { }

  @Post()
  async create(@Body() tipoServicioDto: TipoServicioDto): Promise<ApiResult> {
    let apiResult = { title: routeTipoServicioAdd.title, route: routeTipoServicioAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tipoServicioService.create(tipoServicioDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
      } else {
        apiResult.code = HttpStatus.CONFLICT;
        apiResult.message = result.message;
      }

    } catch (error) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':nombre')
  async find(@Param('nombre') nombre: string): Promise<ApiResult> {
    let apiResult = { title: routeTipoServicioGet.title, route: routeTipoServicioGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tipoServicioService.find(nombre);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.rows = result.number;
        apiResult.data = result.data;
      } else {
        apiResult.code = HttpStatus.CONFLICT;
        apiResult.message = result.message;
      }
    } catch (error) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error.code;
    }

    return apiResult;
  }

  @Get()
  async findAll(): Promise<ApiResult> {
    let apiResult = { title: routeTipoServicioLista.title, route: routeTipoServicioLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.tipoServicioService.findAll();

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

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTipoServicioDto: UpdateTipoServicioDto): Promise<ApiResult> {
    let apiResult = { title: routeTipoServicioUpdate.title, route: routeTipoServicioUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.tipoServicioService.update(id, updateTipoServicioDto);

      if (codeResult.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = codeResult.message;
        apiResult.boolean = true;
        apiResult.rows = codeResult.number;
        apiResult.data = null;
      } else {
        apiResult.code = HttpStatus.CONFLICT;
        apiResult.message = codeResult.message;
      }

    } catch (error) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error.code;
    }

    return apiResult;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<ApiResult> {
    let apiResult = { title: routeTipoServicioDelete.title, route: routeTipoServicioDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.tipoServicioService.remove(id);

      if (codeResult.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = codeResult.message;
        apiResult.boolean = true;
        apiResult.rows = codeResult.number;
        apiResult.data = null;
      } else {
        apiResult.code = HttpStatus.CONFLICT;
        apiResult.message = codeResult.message;
      }
    } catch (error) {
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error.code;
    }

    return apiResult;
  }
}
