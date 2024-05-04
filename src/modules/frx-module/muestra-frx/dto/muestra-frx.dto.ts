import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class MuestraFrxDto {
    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    muestra_sec: number;

    @ApiProperty()
    @IsNotEmpty()
    costo_muestra: number;

    @ApiProperty()
    cod_interno: string;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    observacion: string;

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
