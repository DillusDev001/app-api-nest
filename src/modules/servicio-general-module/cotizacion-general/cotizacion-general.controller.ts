import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CotizacionGeneralService } from './cotizacion-general.service';
import { CotizacionGeneralDto } from './dto/cotizacion-general.dto';
import { UpdateCotizacionGeneralDto } from './dto/update-cotizacion-general.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeCotizacionGeneralAdd, routeCotizacionGeneralDelete, routeCotizacionGeneralGet, routeCotizacionGeneralGetLista, routeCotizacionGeneralGetNow, routeCotizacionGeneralUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('cotizacion-general')
@Controller('cotizacion-general')
export class CotizacionGeneralController {
  constructor(private readonly cotizacionGeneralService: CotizacionGeneralService) { }

  @Post()
  async create(@Body() cotizacionGeneralDto: CotizacionGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionGeneralAdd.title, route: routeCotizacionGeneralAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralService.create(cotizacionGeneralDto);

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

  @Get(':cod_cotizacion')
  async find(@Param('cod_cotizacion') cod_cotizacion: string): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionGeneralGet.title, route: routeCotizacionGeneralGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralService.find(cod_cotizacion);

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
    let apiResult = { title: routeCotizacionGeneralGetNow.title, route: routeCotizacionGeneralGetNow.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralService.findNow(fec_solicitud);

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
    let apiResult = { title: routeCotizacionGeneralGetLista.title, route: routeCotizacionGeneralGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cotizacionGeneralService.findAll();

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
  async update(@Param('cod_cotizacion') cod_cotizacion: string, @Body() updateCotizacionFrxDto: UpdateCotizacionGeneralDto): Promise<ApiResult> {
    let apiResult = { title: routeCotizacionGeneralUpdate.title, route: routeCotizacionGeneralUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cotizacionGeneralService.update(cod_cotizacion, updateCotizacionFrxDto);

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
    let apiResult = { title: routeCotizacionGeneralDelete.title, route: routeCotizacionGeneralDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cotizacionGeneralService.remove(cod_cotizacion);

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
