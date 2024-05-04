import { PartialType } from '@nestjs/swagger';
import { CotizacionFrxDto } from './cotizacion-frx.dto';

export class UpdateCotizacionFrxDto extends PartialType(CotizacionFrxDto) {

    cod_cotizacion: string;
    fec_solicitud: string;
    fec_emision: string;
    id_servicio: number;
    id_persona: number;
    observacion: string;
    costo_total: number;
    descuento: number;
    total_pagar: number;
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
    
}
