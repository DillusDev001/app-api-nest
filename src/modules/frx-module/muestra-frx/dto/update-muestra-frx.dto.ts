import { PartialType } from '@nestjs/swagger';
import { MuestraFrxDto } from './muestra-frx.dto';

export class UpdateMuestraFrxDto extends PartialType(MuestraFrxDto) {

    cod_cotizacion: string;
    muestra_sec: number;
    costo_muestra: number;
    cod_interno: string;
    descripcion: string;
    observacion: string;

    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
    
}
