import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { SubServicioService } from './sub-servicio.service';
import { SubServicioDto } from './dto/sub-servicio.dto';
import { UpdateSubServicioDto } from './dto/update-sub-servicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeSubServicioAdd, routeSubServicioDelete, routeSubServicioGetLista, routeSubServicioUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('sub-servicio')
@Controller('sub-servicio')
export class SubServicioController {
  constructor(private readonly subServicioService: SubServicioService) { }

  @Post()
  async create(@Body() subServicioDto: SubServicioDto): Promise<ApiResult> {
    let apiResult = { title: routeSubServicioAdd.title, route: routeSubServicioAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.subServicioService.create(subServicioDto);

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

  @Get(':id_servicio')
  async find(@Param('id_servicio') id_servicio: number): Promise<ApiResult> {
    let apiResult = { title: routeSubServicioGetLista.title, route: routeSubServicioGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.subServicioService.findAll(id_servicio);

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

  @Patch(':id_sub_servicio/:id_servicio')
  async update(@Param('id_sub_servicio') id_sub_servicio: number, @Param('id_servicio') id_servicio: number, @Body() updateSubServicioDto: UpdateSubServicioDto): Promise<ApiResult> {
    let apiResult = { title: routeSubServicioUpdate.title, route: routeSubServicioUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.subServicioService.update(id_sub_servicio, id_servicio, updateSubServicioDto);

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
      apiResult.message = error;
    }

    return apiResult;
  }

  @Delete(':id_sub_servicio')
  async remove(@Param('id_sub_servicio') id_sub_servicio: number): Promise<ApiResult> {
    let apiResult = { title: routeSubServicioDelete.title, route: routeSubServicioDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.subServicioService.remove(id_sub_servicio);

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
      apiResult.message = error;
    }

    return apiResult;
  }
}
