import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CotizacionFrxDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_solicitud: string;

    @ApiProperty()
    fec_emision: string;

    @ApiProperty()
    @IsNotEmpty()
    id_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    id_persona: number;

    @ApiProperty()
    observacion: string;

    @ApiProperty()
    @IsNotEmpty()
    costo_total: number;

    @ApiProperty()
    @IsNotEmpty()
    descuento: number;

    @ApiProperty()
    @IsNotEmpty()
    total_pagar: number;


    @ApiProperty()
    fec_crea: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    fec_mod: string;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;
    
}
