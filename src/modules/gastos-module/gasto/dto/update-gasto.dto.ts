import { PartialType } from '@nestjs/swagger';
import { GastoDto } from './gasto.dto';

export class UpdateGastoDto extends PartialType(GastoDto) {}
