import { Injectable } from '@nestjs/common';
import { TipoServicioDto } from './dto/tipo-servicio.dto';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';

@Injectable()
export class TipoServicioService {
  create(ipoServicioDto: TipoServicioDto) {
    return 'This action adds a new tipoServicio';
  }
}
