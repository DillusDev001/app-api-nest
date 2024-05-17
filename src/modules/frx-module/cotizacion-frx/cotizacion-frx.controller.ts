import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CotizacionFrxService } from './cotizacion-frx.service';
import { CotizacionFrxDto } from './dto/cotizacion-frx.dto';
import { UpdateCotizacionFrxDto } from './dto/update-cotizacion-frx.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeCotizacionFrxAdd, routeCotizacionFrxDelete, routeCotizacionFrxGet, routeCotizacionFrxGetLista, routeCotizacionFrxGetNow, routeCotizacionFrxUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('cotizacion-frx')
@Controller('cotizacion-frx')
export class CotizacionFrxController {
  constructor(private readonly cotizacionFrxService: CotizacionFrxService) { }

  @Post()
  async create(@Body() cotizacionFrxDto: CotizacionFrxDto): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionFrxAdd.title, route: routeCotizacionFrxAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionFrxService.create(cotizacionFrxDto);

      if (result.boolean) {
        apiResult.status = 'correct';
        apiResult.code = HttpStatus.OK;
        apiResult.message = result.message;
        apiResult.boolean = true;
        apiResult.data = [result.object]
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

  @Get(':cod_cotizacion')
  async find(@Param('cod_cotizacion') cod_cotizacion: string): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionFrxGet.title, route: routeCotizacionFrxGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionFrxService.find(cod_cotizacion);

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

  @Get('now/:fec_solicitud')
  async findNow(@Param('fec_solicitud') fec_solicitud: string): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionFrxGetNow.title, route: routeCotizacionFrxGetNow.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionFrxService.findNow(fec_solicitud);

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
    let apiResult = { title: routeCotizacionFrxGetLista.title, route: routeCotizacionFrxGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionFrxService.findAll();

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

  @Patch(':cod_cotizacion')
  async update(@Param('cod_cotizacion') cod_cotizacion: string, @Body() updateCotizacionFrxDto: UpdateCotizacionFrxDto): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionFrxUpdate.title, route: routeCotizacionFrxUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cotizacionFrxService.update(cod_cotizacion, updateCotizacionFrxDto);

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

  @Delete(':cod_cotizacion')
  async remove(@Param('cod_cotizacion') cod_cotizacion: string): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionFrxDelete.title, route: routeCotizacionFrxDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cotizacionFrxService.remove(cod_cotizacion);

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
