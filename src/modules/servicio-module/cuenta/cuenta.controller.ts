import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaDto } from './dto/cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeCuentaAdd, routeCuentaDelete, routeCuentaGet, routeCuentaUpdate } from 'src/shared/utils/api/api.route';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import path from 'path';

@ApiTags('cuenta')
@Controller('cuenta')
export class CuentaController {
  
  constructor(private readonly cuentaService: CuentaService) { }

  @Post()
  async create(@Body() cuentaDto: CuentaDto): Promise<ApiResult> {
    let apiResult = { title: routeCuentaAdd.title, route: routeCuentaAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cuentaService.create(cuentaDto);

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
    let apiResult = { title: routeCuentaGet.title, route: routeCuentaGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.cuentaService.find(id_servicio);

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

  @Patch(':id_cuenta')
  async update(@Param('id_cuenta') id_cuenta: number, @Body() updateCuentaDto: UpdateCuentaDto): Promise<ApiResult> {
    let apiResult = { title: routeCuentaUpdate.title, route: routeCuentaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cuentaService.update(id_cuenta, updateCuentaDto);

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

  @Delete(':id_cuenta')
  async remove(@Param('id_cuenta') id_cuenta: number): Promise<ApiResult> {
    let apiResult = { title: routeCuentaDelete.title, route: routeCuentaDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.cuentaService.remove(id_cuenta);

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './public',
      filename: (req, file, cb) => {
        const originalName = file.originalname.split('.')[0];
        const fileName = req.headers['my-filename'] as String;
        cb(null, `/cuenta/${fileName}`);
      },
    }),
  }))
  async subirArchivo(@UploadedFile() image): Promise<ApiResult> {
    let apiResult = { title: 'Cuenta Upload', route: '/v1/cuenta/upload/', status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;
    //console.log(image);
  
    apiResult.status = 'correct';
    apiResult.code = HttpStatus.OK;
    apiResult.message = 'Archivo subido correctamente';
    apiResult.boolean = true;

    return apiResult;
    //return { mensaje: 'Archivo subido correctamente' };
  }
}
