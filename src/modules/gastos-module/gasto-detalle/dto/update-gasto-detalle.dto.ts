import { PartialType } from '@nestjs/swagger';
import { GastoDetalleDto } from './gasto-detalle.dto';

export class UpdateGastoDetalleDto extends PartialType(GastoDetalleDto) {
    
    codigo_gasto: string;
    sec: number;
    descripcion: string;
    cantidad: number;
    unidad_medida: string;
    precio_unidad: number;
    precio_total: number;
    
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;

}
