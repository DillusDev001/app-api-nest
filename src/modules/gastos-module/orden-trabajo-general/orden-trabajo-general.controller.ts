import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenTrabajoGeneralService } from './orden-trabajo-general.service';
import { OrdenTrabajoGeneralDto } from './dto/orden-trabajo-general.dto';
import { UpdateOrdenTrabajoGeneralDto } from './dto/update-orden-trabajo-general.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('orden-trabajo-general')
@Controller('orden-trabajo-general')
export class OrdenTrabajoGeneralController {
  constructor(private readonly ordenTrabajoGeneralService: OrdenTrabajoGeneralService) {}

  @Post()
  create(@Body() ordenTrabajoGeneralDto: OrdenTrabajoGeneralDto) {
    return this.ordenTrabajoGeneralService.create(ordenTrabajoGeneralDto);
  }
}
