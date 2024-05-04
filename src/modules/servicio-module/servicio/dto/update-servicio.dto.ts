import { PartialType } from '@nestjs/swagger';
import { ServicioDto } from './servicio.dto';

export class UpdateServicioDto extends PartialType(ServicioDto) {
    id_servicio: number;
    nombre: string;
    descripcion: string;
    id_tipo_servicio: number;
    fec_crea: string;
    user_crea: string;
    fec_mod: string;
    user_mod: string;
}
