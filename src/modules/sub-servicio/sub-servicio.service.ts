import { Injectable } from '@nestjs/common';
import { SubServicioDto } from './dto/sub-servicio.dto';
import { UpdateSubServicioDto } from './dto/update-sub-servicio.dto';

@Injectable()
export class SubServicioService {
  create(subServicioDto: SubServicioDto) {
    return 'This action adds a new subServicio';
  }
}
