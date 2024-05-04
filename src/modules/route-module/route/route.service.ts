import { Injectable } from '@nestjs/common';
import { RouteDto } from './dto/route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Injectable()
export class RouteService {
  create(routeDto: RouteDto) {
    return 'This action adds a new route';
  }
}
