import { PartialType } from '@nestjs/swagger';
import { TipoServicioDto } from './tipo-servicio.dto';

export class UpdateTipoServicioDto extends PartialType(TipoServicioDto) {}
