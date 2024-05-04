import { Injectable } from '@nestjs/common';
import { TipoGastoDto } from './dto/tipo-gasto.dto';
import { UpdateTipoGastoDto } from './dto/update-tipo-gasto.dto';

@Injectable()
export class TipoGastoService {
  create(tipoGastoDto: TipoGastoDto) {
    return 'This action adds a new tipoGasto';
  }
}
