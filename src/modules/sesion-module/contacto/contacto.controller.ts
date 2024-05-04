import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoDto } from './dto/contacto.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routeContactoAdd, routeContactoLista } from 'src/shared/utils/api/api.route';

@ApiTags('contacto')
@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) { }

  @Post(':user')
  async create(@Param('user') user: string, @Body() array: [ContactoDto]): Promise<ApiResult> {
    let apiResult = { title: routeContactoAdd.title, route: routeContactoAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.contactoService.addMultiple(user, array);

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
      apiResult.message = error.code;
    }

    return apiResult;
  }

  @Get(':user')
  async findAll(@Param('user') user: string): Promise<ApiResult> {
    let apiResult = { title: routeContactoLista.title, route: routeContactoLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.contactoService.findAll(user);
  
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

  @Delete(':user')
  async remove(@Param('user') user: string) {
    return await this.contactoService.remove(user);
  }
}
