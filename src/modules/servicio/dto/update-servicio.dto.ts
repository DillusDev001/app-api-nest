import { PartialType } from '@nestjs/swagger';
import { ServicioDto } from './servicio.dto';

export class UpdateServicioDto extends PartialType(ServicioDto) {}
