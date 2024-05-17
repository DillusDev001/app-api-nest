import { PartialType } from '@nestjs/swagger';
import { SubServicioDto } from './sub-servicio.dto';

export class UpdateSubServicioDto extends PartialType(SubServicioDto) {
    id_sub_servicio: number;
    id_servicio: number;
    nombre: string;
    descripcion: string;
    
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
}
