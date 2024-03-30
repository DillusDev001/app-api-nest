import { Injectable } from '@nestjs/common';
import { ServicioDto } from './dto/servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServicioService {
  create(servicioDto: ServicioDto) {
    return 'This action adds a new servicio';
  }
}
