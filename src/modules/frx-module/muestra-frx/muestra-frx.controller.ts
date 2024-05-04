import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { MuestraFrxService } from './muestra-frx.service';
import { MuestraFrxDto } from './dto/muestra-frx.dto';
import { UpdateMuestraFrxDto } from './dto/update-muestra-frx.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeMuestraFrxAdd, routeMuestraFrxLista } from 'src/shared/utils/api/api.route';

@ApiTags('muestra-frx')
@Controller('muestra-frx')
export class MuestraFrxController {
  constructor(private readonly muestraFrxService: MuestraFrxService) {}

  @Post()
  async create(@Body() array: [MuestraFrxDto]): Promise<ApiResult> {
    let apiResult = { title: routeMuestraFrxAdd.title, route: routeMuestraFrxAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.muestraFrxService.addMultiple(array);

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

  @Get(':cod_cotizacion')
  async findAll(@Param('cod_cotizacion') cod_cotizacion: string): Promise<ApiResult> {
    let apiResult = { title: routeMuestraFrxLista.title, route: routeMuestraFrxLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.muestraFrxService.findAll(cod_cotizacion);
  
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

  @Delete(':cod_cotizacion')
  async remove(@Param('cod_cotizacion') cod_cotizacion: string) {
    return await this.muestraFrxService.remove(cod_cotizacion);
  }
}
