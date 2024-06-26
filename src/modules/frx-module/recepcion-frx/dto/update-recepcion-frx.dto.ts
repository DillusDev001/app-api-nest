import { PartialType } from '@nestjs/swagger';
import { RecepcionFrxDto } from './recepcion-frx.dto';

export class UpdateRecepcionFrxDto extends PartialType(RecepcionFrxDto) {
    cod_cotizacion: string;
    fec_recepcion: string;
    user_recepcion: string;
    observaciones: string;

    user_asignado: string;
    fec_ini: string;
    fec_fin: string;
    estado: number;

    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
}
