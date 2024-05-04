import { PartialType } from '@nestjs/swagger';
import { PersonaDto } from './persona.dto';

export class UpdatePersonaDto extends PartialType(PersonaDto) {
    id_persona: number;
    nombre_persona: string;
    celular: string;
    email: string;
    razon: string;
    nit: string;
    id_empresa: number;
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
}
