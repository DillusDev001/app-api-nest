import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OrdenFrxDto {
    
    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    desde_fecha: string;

    @ApiProperty()
    @IsNotEmpty()
    hasta_fecha: string;

    @ApiProperty()
    @IsNotEmpty()
    lugar: string;

    @ApiProperty()
    @IsNotEmpty()
    asumido: string;

    @ApiProperty()
    @IsNotEmpty()
    incertidumbre: string;

    @ApiProperty()
    @IsNotEmpty()
    entrega: string;

    @ApiProperty()
    @IsNotEmpty()
    mediante: string;

    @ApiProperty()
    @IsNotEmpty()
    pago: string;

    @ApiProperty()
    @IsNotEmpty()
    pago_hasta: string;

    @ApiProperty()
    @IsNotEmpty()
    factura: string;

    @ApiProperty()
    @IsNotEmpty()
    factura_hasta: string;
}
