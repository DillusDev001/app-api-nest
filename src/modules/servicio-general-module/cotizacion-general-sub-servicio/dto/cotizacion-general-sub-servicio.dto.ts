import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CotizacionGeneralSubServicioDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    id_sub_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    costo_sub_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
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
