import { PartialType } from '@nestjs/mapped-types';
import { OrdenFrxDto } from './orden-frx.dto';

export class UpdateOrdenFrxDto extends PartialType(OrdenFrxDto) {
    cod_cotizacion: string;
    desde_fecha: string;
    hasta_fecha: string;
    lugar: string;
    asumido: string;
    incertidumbre: string;
    entrega: string;
    mediante: string;
    pago: string;
    pago_hasta: string;
    factura: string;
    factura_hasta: string;
}
