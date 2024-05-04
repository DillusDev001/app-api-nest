import { PartialType } from '@nestjs/swagger';
import { GastoDetalleDto } from './gasto-detalle.dto';

export class UpdateGastoDetalleDto extends PartialType(GastoDetalleDto) {}
