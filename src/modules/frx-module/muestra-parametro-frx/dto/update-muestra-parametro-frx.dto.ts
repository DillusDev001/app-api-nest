import { PartialType } from '@nestjs/swagger';
import { MuestraParametroFrxDto } from './muestra-parametro-frx.dto';

export class UpdateMuestraParametroFrxDto extends PartialType(MuestraParametroFrxDto) {
    
    cod_cotizacion: string;
    muestra_sec: number;
    parametro_sec:number;
    id_parametro: number;
    cantidad: number;
    costo_parametro_unitario: number;
    costo_parametro_total: number;
    observacion: string;

    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
    
}
