import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class RecepcionFrxDto {
    
    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_recepcion: string;

    @ApiProperty()
    @IsNotEmpty()
    user_recepcion: string;

    @ApiProperty()
    @IsNotEmpty()
    observaciones: string;


    @ApiProperty()
    user_asignado: string;

    @ApiProperty()
    fec_ini: string;

    @ApiProperty()

    fec_fin: string;

    @ApiProperty()
    estado: number;


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
