import { Injectable } from '@nestjs/common';
import { PersonaDto } from './dto/persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  create(personaDto: PersonaDto) {
    return 'This action adds a new persona';
  }
}
