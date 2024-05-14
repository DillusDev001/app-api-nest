import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ProveedorDto {

    @ApiProperty()
    id_proveedor: number;

    @ApiProperty()
    @IsNotEmpty()
    razon: string;

    @ApiProperty()
    @IsNotEmpty()
    nit: string;

    @ApiProperty()
    @IsNotEmpty()
    banco: string;

    @ApiProperty()
    @IsNotEmpty()
    nro_cuenta: string;

    @ApiProperty()
    @IsNotEmpty()
    beneficiario: string;

    @ApiProperty()
    @IsNotEmpty()
    moneda: string;


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
