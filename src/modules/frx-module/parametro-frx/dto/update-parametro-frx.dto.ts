import { PartialType } from '@nestjs/swagger';
import { ParametroFrxDto } from './parametro-frx.dto';

export class UpdateParametroFrxDto extends PartialType(ParametroFrxDto) {
    id_parametro: number;
    nombre: string;
    costo_directo: number;
    costo_variable: number;
    
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
}
