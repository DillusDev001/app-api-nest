import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastoDetalleService } from './gasto-detalle.service';
import { GastoDetalleDto } from './dto/gasto-detalle.dto';
import { UpdateGastoDetalleDto } from './dto/update-gasto-detalle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gasto-detalle')
@Controller('gasto-detalle')
export class GastoDetalleController {
  constructor(private readonly gastoDetalleService: GastoDetalleService) {}

  @Post()
  create(@Body() gastoDetalleDto: GastoDetalleDto) {
    return this.gastoDetalleService.create(gastoDetalleDto);
  }
}
