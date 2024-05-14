import { Injectable } from '@nestjs/common';
import { OrdenTrabajoGeneralDto } from './dto/orden-trabajo-general.dto';
import { UpdateOrdenTrabajoGeneralDto } from './dto/update-orden-trabajo-general.dto';

@Injectable()
export class OrdenTrabajoGeneralService {
  create(ordenTrabajoGeneralDto: OrdenTrabajoGeneralDto) {
    return 'This action adds a new ordenTrabajoGeneral';
  }
}
