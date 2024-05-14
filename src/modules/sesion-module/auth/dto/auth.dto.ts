import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthDto {
    @ApiProperty()
    @IsNotEmpty()
    user: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string

    @ApiProperty()
    pregunta: string

    @ApiProperty()
    respuesta: string

    
}