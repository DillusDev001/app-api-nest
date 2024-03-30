import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TipoServicio {
    @PrimaryGeneratedColumn()
    id_tipo_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}
