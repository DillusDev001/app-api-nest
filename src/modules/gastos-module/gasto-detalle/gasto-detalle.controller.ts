import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { GastoDetalleService } from './gasto-detalle.service';
import { GastoDetalleDto } from './dto/gasto-detalle.dto';
import { UpdateGastoDetalleDto } from './dto/update-gasto-detalle.dto';
import { ApiTags } from '@nestjs/swagger';
import { GastoDetalle } from './entities/gasto-detalle.entity';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeGastoDetalleAdd, routeGastoDetalleLista } from 'src/shared/utils/api/api.route';

@ApiTags('gasto-detalle')
@Controller('gasto-detalle')
export class GastoDetalleController {

  constructor(private readonly gastoDetalleService: GastoDetalleService) {}

  @Post()
  async create(@Body() array: [GastoDetalle]): Promise<ApiResult> {
    let apiResult = { title: routeGastoDetalleAdd.title, route: routeGastoDetalleAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.gastoDetalleService.addMultiple(array);

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
        apiResult.data = result.data;
      }
    } catch (error) {
      apiResult.status = 'error';
      apiResult.code = HttpStatus.NOT_FOUND;
      apiResult.message = error;
    }

    return apiResult;
  }

  @Get(':codigo_gasto')
  async findAll(@Param('codigo_gasto') codigo_gasto: string): Promise<ApiResult> {
    let apiResult = { title: routeGastoDetalleLista.title, route: routeGastoDetalleLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.gastoDetalleService.findAll(codigo_gasto);

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

  @Delete(':codigo_gasto/:sec')
  async remove(@Param('routeGastoDetalle') codigo_gasto: string, @Param('sec') sec: number) {
    return await this.gastoDetalleService.remove(codigo_gasto, sec);
  }
}
