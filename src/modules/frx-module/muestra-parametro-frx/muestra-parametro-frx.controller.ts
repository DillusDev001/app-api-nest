import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { MuestraParametroFrxService } from './muestra-parametro-frx.service';
import { MuestraParametroFrxDto } from './dto/muestra-parametro-frx.dto';
import { UpdateMuestraParametroFrxDto } from './dto/update-muestra-parametro-frx.dto';
import { ApiTags } from '@nestjs/swagger';
import { MuestraParametroFrx } from './entities/muestra-parametro-frx.entity';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeMuestraParametroFrxAdd, routeMuestraParametroFrxLista } from 'src/shared/utils/api/api.route';

@ApiTags('muestra-parametro-frx')
@Controller('muestra-parametro-frx')
export class MuestraParametroFrxController {
  constructor(private readonly muestraParametroFrxService: MuestraParametroFrxService) { }

  @Post()
  async create(@Body() array: [MuestraParametroFrx]): Promise<ApiResult> {
    let apiResult = { title: routeMuestraParametroFrxAdd.title, route: routeMuestraParametroFrxAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.muestraParametroFrxService.addMultiple(array);

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

  @Get(':cod_cotizacion/:muestra_sec')
  async findAll(@Param('cod_cotizacion') cod_cotizacion: string, @Param('muestra_sec') muestra_sec: number): Promise<ApiResult> {
    let apiResult = { title: routeMuestraParametroFrxLista.title, route: routeMuestraParametroFrxLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.muestraParametroFrxService.findAll(cod_cotizacion, muestra_sec);

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

  @Delete(':cod_cotizacion/:muestra_sec')
  async remove(@Param('cod_cotizacion') cod_cotizacion: string, @Param('muestra_sec') muestra_sec: number) {
    return await this.muestraParametroFrxService.remove(cod_cotizacion, muestra_sec);
  }
}