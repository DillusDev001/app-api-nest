import { PartialType } from '@nestjs/swagger';
import { CotizacionGeneralSubServicioDto } from './cotizacion-general-sub-servicio.dto';

export class UpdateCotizacionGeneralSubServicioDto extends PartialType(CotizacionGeneralSubServicioDto) {

    cod_cotizacion: string;
    id_sub_servicio: number;
    costo_sub_servicio: number;


    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;

}
