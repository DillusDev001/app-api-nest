import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class TipoServicioDto {
    @ApiProperty()
    id_tipo_servicio: number;

    @ApiProperty()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty()
    @IsNotEmpty()
    descripcion: string;
}
