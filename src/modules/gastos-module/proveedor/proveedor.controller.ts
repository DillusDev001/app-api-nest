import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorDto } from './dto/proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeProovedorAdd, routeProovedorDelete, routeProovedorGet, routeProovedorLista, routeProovedorUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('proveedor')
@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) { }

  @Post()
  async create(@Body() proveedorDto: ProveedorDto): Promise<ApiResult> {
    let apiResult = { title: routeProovedorAdd.title, route: routeProovedorAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.proveedorService.create(proveedorDto);

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

  @Get(':attribute/:value')
  async find(@Param('attribute') attribute: string, @Param('value') value: string): Promise<ApiResult> {
    let apiResult = { title: routeProovedorGet.title, route: routeProovedorGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.proveedorService.find(attribute, value);

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
    let apiResult = { title: routeProovedorLista.title, route: routeProovedorLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.proveedorService.findAll();

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

  @Patch(':id_proveedor')
  async update(@Param('id_proveedor') id_proveedor: number, @Body() updateProveedorDto: UpdateProveedorDto): Promise<ApiResult> {
    let apiResult = { title: routeProovedorUpdate.title, route: routeProovedorUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.proveedorService.update(id_proveedor, updateProveedorDto);

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

  @Delete(':id_proveedor')
  async remove(@Param('id_proveedor') id_proveedor: number): Promise<ApiResult> {
    let apiResult = { title: routeProovedorDelete.title, route: routeProovedorDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.proveedorService.remove(id_proveedor);

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
