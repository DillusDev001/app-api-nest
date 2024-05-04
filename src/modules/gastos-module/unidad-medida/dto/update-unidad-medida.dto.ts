import { PartialType } from '@nestjs/swagger';
import { UnidadMedidaDto } from './unidad-medida.dto';

export class UpdateUnidadMedidaDto extends PartialType(UnidadMedidaDto) {}
