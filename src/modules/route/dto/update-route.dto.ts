import { PartialType } from '@nestjs/swagger';
import { RouteDto } from './route.dto';

export class UpdateRouteDto extends PartialType(RouteDto) {}
