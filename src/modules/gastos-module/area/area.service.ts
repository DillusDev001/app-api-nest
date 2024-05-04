import { Injectable } from '@nestjs/common';
import { AreaDto } from './dto/area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  create(createAreaDto: AreaDto) {
    return 'This action adds a new area';
  }
}
