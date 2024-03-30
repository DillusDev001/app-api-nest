import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ServicioDto {
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
    id_tipo_servicio: number;


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
