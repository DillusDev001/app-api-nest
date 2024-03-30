import { PartialType } from '@nestjs/swagger';
import { SubServicioDto } from './sub-servicio.dto';

export class UpdateSubServicioDto extends PartialType(SubServicioDto) {}
