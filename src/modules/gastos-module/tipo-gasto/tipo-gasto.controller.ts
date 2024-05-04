import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoGastoService } from './tipo-gasto.service';
import { TipoGastoDto } from './dto/tipo-gasto.dto';
import { UpdateTipoGastoDto } from './dto/update-tipo-gasto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tipo-gasto')
@Controller('tipo-gasto')
export class TipoGastoController {
  constructor(private readonly tipoGastoService: TipoGastoService) {}

  @Post()
  create(@Body() tipoGastoDto: TipoGastoDto) {
    return this.tipoGastoService.create(tipoGastoDto);
  }
}
