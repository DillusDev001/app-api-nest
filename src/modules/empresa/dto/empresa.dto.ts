import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class EmpresaDto {
    @ApiProperty()
    @IsNotEmpty()
    id_empresa: number;

    @ApiProperty()
    @IsNotEmpty()
    razon_social: string;

    @ApiProperty()
    @IsNotEmpty()
    direccion: string;

    @ApiProperty()
    @IsNotEmpty()
    telefono: string;

    @ApiProperty()
    @IsNotEmpty()
    web: string;

    @ApiProperty()
    @IsNotEmpty()
    ciudad: string;

    @ApiProperty()
    @IsNotEmpty()
    pais: string;

    @ApiProperty()
    @IsNotEmpty()
    nit: string;

    @ApiProperty()
    @IsNotEmpty()
    user_crea: string;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;
}