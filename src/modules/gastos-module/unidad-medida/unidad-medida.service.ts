import { Injectable } from '@nestjs/common';
import { UnidadMedidaDto } from './dto/unidad-medida.dto';
import { UpdateUnidadMedidaDto } from './dto/update-unidad-medida.dto';

@Injectable()
export class UnidadMedidaService {
  create(unidadMedidaDto: UnidadMedidaDto) {
    return 'This action adds a new unidadMedida';
  }
}
