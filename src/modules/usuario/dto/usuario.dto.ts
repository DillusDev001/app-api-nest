import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class UsuarioDto {

    @ApiProperty()
    @IsNotEmpty()
    user: string

    @ApiProperty()
    @IsNotEmpty()
    nombres: string

    @ApiProperty()
    @IsNotEmpty()
    apellidos: string

    @ApiProperty()
    @IsNotEmpty()
    code: string

    @ApiProperty()
    @IsNotEmpty()
    celular: string

    @ApiProperty()
    @IsNotEmpty()
    ci: string

    @ApiProperty()
    @IsNotEmpty()
    exp: string

    @ApiProperty()
    @IsNotEmpty()
    rol: string

    @ApiProperty()
    @IsNotEmpty()
    autorizacion: number

    @ApiProperty()
    img: string

    @ApiProperty()
    estado: number

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string

    @ApiProperty()
    pregunta: string

    @ApiProperty()
    @IsNotEmpty()
    respuesta: string

}
