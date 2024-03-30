import { PartialType } from '@nestjs/swagger';
import { ContactoDto } from './contacto.dto';

export class UpdateContactoDto extends PartialType(ContactoDto) {}
