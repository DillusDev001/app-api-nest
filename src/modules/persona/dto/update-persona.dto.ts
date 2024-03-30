import { PartialType } from '@nestjs/swagger';
import { PersonaDto } from './persona.dto';

export class UpdatePersonaDto extends PartialType(PersonaDto) {}
