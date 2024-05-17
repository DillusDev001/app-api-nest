import { PartialType } from '@nestjs/swagger';
import { EmpresaDto } from './empresa.dto';

export class UpdateEmpresaDto extends PartialType(EmpresaDto) {
    id_empresa: number;
    razon_social: string;
    direccion: string;
    telefono: string;
    web: string;
    ciudad: string;
    pais: string;
    nit: string;
    tipo: string;
    user_crea: string;
    user_mod: string;
}
