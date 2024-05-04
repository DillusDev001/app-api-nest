import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CotizacionGeneralSubServicioService } from './cotizacion-general-sub-servicio.service';
import { CotizacionGeneralSubServicioDto } from './dto/cotizacion-general-sub-servicio.dto';
import { UpdateCotizacionGeneralSubServicioDto } from './dto/update-cotizacion-general-sub-servicio.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { CotizacionGeneralSubServicio } from './entities/cotizacion-general-sub-servicio.entity';
import { routeCotizacionGeneralSubServicioAdd, routeCotizacionGeneralSubServicioLista } from 'src/shared/utils/api/api.route';

@ApiTags('cotizacion-general-sub-servicio')
@Controller('cotizacion-general-sub-servicio')
export class CotizacionGeneralSubServicioController {
  constructor(private readonly cotizacionGeneralSubServicioService: CotizacionGeneralSubServicioService) {}

  @Post()
  async create(@Body() array: [CotizacionGeneralSubServicio]): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionGeneralSubServicioAdd.title, route: routeCotizacionGeneralSubServicioAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralSubServicioService.addMultiple(array);

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
    let apiResult = { title: routeCotizacionGeneralSubServicioLista.title, route: routeCotizacionGeneralSubServicioLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralSubServicioService.findAll(cod_cotizacion);

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
    return await this.cotizacionGeneralSubServicioService.remove(cod_cotizacion, muestra_sec);
  }
}
