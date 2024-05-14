import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoDto } from './dto/gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeGastoAdd, routeGastoDelete, routeGastoGet, routeGastoGetLista, routeGastoUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('gasto')
@Controller('gasto')
export class GastoController {
  constructor(private readonly gastoService: GastoService) {}

  @Post()
  async create(@Body() gastoDto: GastoDto): Promise<ApiResult> {
    let apiResult = { title: routeGastoAdd.title, route: routeGastoAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.gastoService.create(gastoDto);

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

  @Get(':codigo_gasto')
  async find(@Param('codigo_gasto') codigo_gasto: string): Promise<ApiResult> {
    let apiResult = { title: routeGastoGet.title, route: routeGastoGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.gastoService.find(codigo_gasto);

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
    let apiResult = { title: routeGastoGetLista.title, route: routeGastoGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.gastoService.findAll();

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

  @Patch(':codigo_gasto')
  async update(@Param('codigo_gasto') codigo_gasto: string, @Body() updateGastoDto: UpdateGastoDto): Promise<ApiResult> {
    let apiResult = { title: routeGastoUpdate.title, route: routeGastoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.gastoService.update(codigo_gasto, updateGastoDto);

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

  @Delete(':codigo_gasto')
  async remove(@Param('codigo_gasto') codigo_gasto: string): Promise<ApiResult> {
    let apiResult = { title: routeGastoDelete.title, route: routeGastoDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.gastoService.remove(codigo_gasto);

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
