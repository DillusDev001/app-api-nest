import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadMedidaService } from './unidad-medida.service';
import { UnidadMedidaDto } from './dto/unidad-medida.dto';
import { UpdateUnidadMedidaDto } from './dto/update-unidad-medida.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('unidad-medida')
@Controller('unidad-medida')
export class UnidadMedidaController {
  constructor(private readonly unidadMedidaService: UnidadMedidaService) {}

  @Post()
  create(@Body() unidadMedidaDto: UnidadMedidaDto) {
    return this.unidadMedidaService.create(unidadMedidaDto);
  }
}
