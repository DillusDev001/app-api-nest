import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SubServicioDto {
    @ApiProperty()
    @IsNotEmpty()
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
    @IsNotEmpty()
    costo_directo: number;

    @ApiProperty()
    @IsNotEmpty()
    costo_variable: number;


    @ApiProperty()
    @IsNotEmpty()
    fec_crea: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_mod: string;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;
}
