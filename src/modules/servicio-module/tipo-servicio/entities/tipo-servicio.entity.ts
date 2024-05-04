import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoServicio {
    @PrimaryGeneratedColumn()
    id_tipo_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}
