import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CuentaDto {

    @ApiProperty()
    @IsNotEmpty()
    id_cuenta: number;

    @ApiProperty()
    @IsNotEmpty()
    id_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    banco: string;

    @ApiProperty()
    @IsNotEmpty()
    nro_cuenta: string;

    @ApiProperty()
    @IsNotEmpty()
    a_nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    img: string;

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
