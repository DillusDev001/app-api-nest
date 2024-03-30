import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubServicioService } from './sub-servicio.service';
import { SubServicioDto } from './dto/sub-servicio.dto';
import { UpdateSubServicioDto } from './dto/update-sub-servicio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sub-servicio')
@Controller('sub-servicio')
export class SubServicioController {
  constructor(private readonly subServicioService: SubServicioService) {}

  @Post()
  create(@Body() subServicioDto: SubServicioDto) {
    return this.subServicioService.create(subServicioDto);
  }
}
