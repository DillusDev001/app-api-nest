import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class GastoDto {

    @ApiProperty()
    @IsNotEmpty()
    codigo_gasto: string;

    @ApiProperty()
    @IsNotEmpty()
    version: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_vigencia: string;

    @ApiProperty()
    @IsNotEmpty()
    registro: string;

    @ApiProperty()
    @IsNotEmpty()
    tipo_gasto: string;


    @ApiProperty()
    @IsNotEmpty()
    area: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_emision: string;

    @ApiProperty()
    @IsNotEmpty()
    id_proveedor: number;


    @ApiProperty()
    @IsNotEmpty()
    tipo_cambio: number;

    @ApiProperty()
    @IsNotEmpty()
    tipo_pago: string;

    @ApiProperty()
    @IsNotEmpty()
    tiempo_credito: string;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_entrega: string;


    @ApiProperty()
    @IsNotEmpty()
    sub_total: number;

    @ApiProperty()
    @IsNotEmpty()
    descuento: number;

    @ApiProperty()
    @IsNotEmpty()
    total_bs: number;

    @ApiProperty()
    @IsNotEmpty()
    total_sus: number;


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
