import { Injectable } from '@nestjs/common';
import { GastoDetalleDto } from './dto/gasto-detalle.dto';
import { UpdateGastoDetalleDto } from './dto/update-gasto-detalle.dto';

@Injectable()
export class GastoDetalleService {
  create(gastoDetalleDto: GastoDetalleDto) {
    return 'This action adds a new gastoDetalle';
  }
}
