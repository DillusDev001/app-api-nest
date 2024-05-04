import { PartialType } from '@nestjs/swagger';
import { ContactoDto } from './contacto.dto';

export class UpdateContactoDto extends PartialType(ContactoDto) {
    user: string;
    cont: number;
    nro_contacto: string;
    nombre_contacto: string;
}
