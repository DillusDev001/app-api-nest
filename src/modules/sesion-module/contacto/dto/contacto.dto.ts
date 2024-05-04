import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ContactoDto {
    @ApiProperty()
    @IsNotEmpty()
    user: string;

    @ApiProperty()
    @IsNotEmpty()
    cont: number;

    @ApiProperty()
    @IsNotEmpty()
    nro_contacto: string;

    @ApiProperty()
    @IsNotEmpty()
    nombre_contacto: string;
}