import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Servicio {
    @PrimaryGeneratedColumn()
    id_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    id_tipo_servicio: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
