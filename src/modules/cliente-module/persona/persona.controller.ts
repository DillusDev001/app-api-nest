import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaDto } from './dto/persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/shared/interfaces/api.result';
import { routePersonaAdd, routePersonaDelete, routePersonaGet, routePersonaLista, routePersonaUpdate } from 'src/shared/utils/api/api.route';

@ApiTags('persona')
@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) { }

  @Post()
  async create(@Body() personaDto: PersonaDto): Promise<ApiResult> {
    let apiResult = { title: routePersonaAdd.title, route: routePersonaAdd.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.personaService.create(personaDto);

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
    let apiResult = { title: routePersonaGet.title, route: routePersonaGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.personaService.find(attribute, value);

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

  @Get('id_persona/:id_persona')
  async findById(@Param('id_persona') id_persona: number): Promise<ApiResult> {
    let apiResult = { title: routePersonaGet.title, route: routePersonaGet.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.personaService.findByID(id_persona);

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
    let apiResult = { title: routePersonaLista.title, route: routePersonaLista.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const result = await this.personaService.findAll();

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

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePersonaDto: UpdatePersonaDto): Promise<ApiResult> {
    let apiResult = { title: routePersonaUpdate.title, route: routePersonaUpdate.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.personaService.update(id, updatePersonaDto);

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

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<ApiResult> {
    let apiResult = { title: routePersonaDelete.title, route: routePersonaDelete.route, status: 'error', code: 0, message: '', boolean: false, rows: 0, data: null } as ApiResult;

    try {
      const codeResult = await this.personaService.remove(id);

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
