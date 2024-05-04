import { Injectable } from '@nestjs/common';
import { GastoDto } from './dto/gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';

@Injectable()
export class GastoService {
  create(gastoDto: GastoDto) {
    return 'This action adds a new gasto';
  }
}
