import { PartialType } from '@nestjs/mapped-types';
import { CuentaDto } from './cuenta.dto';

export class UpdateCuentaDto extends PartialType(CuentaDto) {

    id_cuenta: number;
    id_servicio: number;
    banco: string;
    nro_cuenta: string;
    a_nombre: string;
    img: string;
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;

}
