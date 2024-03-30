import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsNotEmpty } from "class-validator"

export class UsuarioDto {
    @ApiProperty()
    @IsNotEmpty()
    user: string;

    @ApiProperty()
    codigo: string;

    @ApiProperty()
    @IsNotEmpty()
    nombres: string;

    @ApiProperty()
    @IsNotEmpty()
    apellidos: string;

    @ApiProperty()
    @IsNotEmpty()
    code: string;

    @ApiProperty()
    @IsNotEmpty()
    celular: string;

    @ApiProperty()
    telefono: string;

    @ApiProperty()
    @IsNotEmpty()
    ci: string;

    @ApiProperty()
    @IsNotEmpty()
    exp: string;

    // ========== \\
    @ApiProperty()
    @IsNotEmpty()
    fec_ingreso: string;

    @ApiProperty()
    fec_baja: string;

    @ApiProperty()
    @IsNotEmpty()
    banco: string;

    @ApiProperty()
    @IsNotEmpty()
    nro_cuenta: string;

    @ApiProperty()
    @IsNotEmpty()
    sexo: string;

    @ApiProperty()
    @IsNotEmpty()
    est_civil: string;

    @ApiProperty()
    @IsNotEmpty()
    fec_nac: string;

    // ========== \\
    @ApiProperty()
    @IsNotEmpty()
    rol: string;

    @ApiProperty()
    img: string;

    @ApiProperty()
    estado: number;

    @ApiProperty()
    @IsEmpty()
    fec_crea: any;

    @ApiProperty()
    @IsNotEmpty()
    user_mod: string;

    @ApiProperty()
    @IsEmpty()
    fec_mod: any;
}
