import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class PersonaDto {
    @ApiProperty()
    id_persona: number;

    @ApiProperty()
    @IsNotEmpty()
    nombre_persona: string;

    @ApiProperty()
    @IsNotEmpty()
    celular: string;

    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    razon: string;

    @ApiProperty()
    @IsNotEmpty()
    nit: string;

    @ApiProperty()
    id_empresa: number;


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