import { PartialType } from '@nestjs/swagger';
import { AreaDto } from './area.dto';

export class UpdateAreaDto extends PartialType(AreaDto) {}
