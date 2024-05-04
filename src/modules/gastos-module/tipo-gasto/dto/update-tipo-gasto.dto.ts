import { PartialType } from '@nestjs/swagger';
import { TipoGastoDto } from './tipo-gasto.dto';

export class UpdateTipoGastoDto extends PartialType(TipoGastoDto) {}
