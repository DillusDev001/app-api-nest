import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioDto } from './dto/servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('servicio')
@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Post()
  create(@Body() servicioDto: ServicioDto) {
    return this.servicioService.create(servicioDto);
  }
}
