import { PartialType } from '@nestjs/swagger';
import { ProveedorDto } from './proveedor.dto';

export class UpdateProveedorDto extends PartialType(ProveedorDto) {

    id_proveedor: number;
    razon: string;
    nit: string;
    banco: string;
    nro_cuenta: string;
    beneficiario: string;
    moneda: string;
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;

}
