import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class GastoDetalleDto {

    @ApiProperty()
    @IsNotEmpty()
    codigo_gasto: string;

    @ApiProperty()
    @IsNotEmpty()
    sec: number;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty()
    @IsNotEmpty()
    cantidad: number;

    @ApiProperty()
    @IsNotEmpty()
    unidad_medida: string;

    @ApiProperty()
    @IsNotEmpty()
    precio_unidad: number;

    @ApiProperty()
    @IsNotEmpty()
    precio_total: number;


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
