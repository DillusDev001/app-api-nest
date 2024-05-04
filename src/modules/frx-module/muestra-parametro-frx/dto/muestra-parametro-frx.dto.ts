import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class MuestraParametroFrxDto {
    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    muestra_sec: number;

    @ApiProperty()
    @IsNotEmpty()
    parametro_sec:number;

    @ApiProperty()
    @IsNotEmpty()
    id_parametro: number;

    @ApiProperty()
    @IsNotEmpty()
    cantidad: number;

    @ApiProperty()
    @IsNotEmpty()
    costo_parametro_unitario: number;

    @ApiProperty()
    @IsNotEmpty()
    costo_parametro_total: number;

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
