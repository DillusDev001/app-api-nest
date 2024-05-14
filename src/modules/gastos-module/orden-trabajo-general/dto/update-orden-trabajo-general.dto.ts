import { PartialType } from '@nestjs/mapped-types';
import { OrdenTrabajoGeneralDto } from './orden-trabajo-general.dto';

export class UpdateOrdenTrabajoGeneralDto extends PartialType(OrdenTrabajoGeneralDto) {}
