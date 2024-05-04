import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoDto } from './dto/gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gasto')
@Controller('gasto')
export class GastoController {
  constructor(private readonly gastoService: GastoService) {}

  @Post()
  create(@Body() gastoDto: GastoDto) {
    return this.gastoService.create(gastoDto);
  }
}
