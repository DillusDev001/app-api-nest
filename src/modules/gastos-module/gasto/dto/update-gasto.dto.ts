import { PartialType } from '@nestjs/swagger';
import { GastoDto } from './gasto.dto';

export class UpdateGastoDto extends PartialType(GastoDto) {

    codigo_gasto: string;
    version: string;
    fec_vigencia: string;
    registro: string;
    tipo_gasto: string;

    area: string;
    fec_emision: string;
    id_proveedor: number;

    tipo_cambio: number;
    tipo_pago: string;
    tiempo_credito: string;
    descripcion: string;
    fec_entrega: string;

    sub_total: number;
    descuento: number;
    total_bs: number;
    total_sus: number;

    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
    
}
