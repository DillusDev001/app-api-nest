import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DocumentoFrxDto {

    @ApiProperty()
    @IsNotEmpty()
    cod_cotizacion: string;

    @ApiProperty()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty()
    @IsNotEmpty()
    token: string;

}
