import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthDto {
    @ApiProperty({
        description: 'Tú email para ingresar.',
        default: 'email@example.com'
    })
    @IsNotEmpty({})
    user: string;

    @ApiProperty({
        description: 'Contraseña.',
        default: '**************'
    })
    @IsNotEmpty()
    password: string

    @ApiProperty()
    pregunta: string

    @ApiProperty()
    respuesta: string
}