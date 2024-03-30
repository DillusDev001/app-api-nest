import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoServicioService } from './tipo-servicio.service';
import { TipoServicioDto } from './dto/tipo-servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo-servicio')
@Controller('tipo-servicio')
export class TipoServicioController {
  constructor(private readonly tipoServicioService: TipoServicioService) {}

  @Post()
  create(@Body() tipoServicioDto: TipoServicioDto) {
    return this.tipoServicioService.create(tipoServicioDto);
  }
}
