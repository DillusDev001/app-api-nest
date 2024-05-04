import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { DocumentoFrxService } from './documento-frx.service';
import { DocumentoFrxDto } from './dto/documento-frx.dto';
import { UpdateDocumentoFrxDto } from './dto/update-documento-frx.dto';
import { ApiTags } from '@nestjs/swagger';
import { routeDocumentoAdd, routeDocumentoDelete, routeDocumentoGet, routeDocumentoGetLista, routeDocumentoUpdate } from 'src/shared/utils/api/api.route';
import { ApiResult } from 'src/shared/interfaces/api.result';

@ApiTags('documento-frx')
@Controller('documento-frx')
export class DocumentoFrxController {
  constructor(private readonly documentoFrxService: DocumentoFrxService) {}

  @Post()
  async create(@Body() documentoFrxDto: DocumentoFrxDto): Promise<ApiResult> {
    let apiResult = { title: routeDocumentoAdd.title, route: routeDocumentoAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.documentoFrxService.create(documentoFrxDto);

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
    let apiResult = { title: routeDocumentoGet.title, route: routeDocumentoGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.documentoFrxService.find(cod_cotizacion);

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
    let apiResult = { title: routeDocumentoGetLista.title, route: routeDocumentoGetLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.documentoFrxService.findAll();

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
  async update(@Param('cod_cotizacion') cod_cotizacion: string, @Body() updateDocumentoFrxDto: UpdateDocumentoFrxDto): Promise<ApiResult> {
    let apiResult = { title: routeDocumentoUpdate.title, route: routeDocumentoUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.documentoFrxService.update(cod_cotizacion, updateDocumentoFrxDto);

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
    let apiResult = { title: routeDocumentoDelete.title, route: routeDocumentoDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.documentoFrxService.remove(cod_cotizacion);

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
