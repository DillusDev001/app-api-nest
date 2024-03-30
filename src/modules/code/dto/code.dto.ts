import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CodeDto {

    @ApiProperty()
    @IsNotEmpty()
    code: string;

    @ApiProperty()
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty()
    var_string: string;

    @ApiProperty()
    var_number: number;

    @ApiProperty()
    @IsNotEmpty()
    count: number;

    @ApiProperty()
    estado: number

}
