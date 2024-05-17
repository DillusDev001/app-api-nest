import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SubServicioDto {
    @ApiProperty()
    id_sub_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    id_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;


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
