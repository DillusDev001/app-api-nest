import { Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class SubServicio {
    @PrimaryGeneratedColumn()
    id_sub_servicio: number;

    @PrimaryColumn()
    id_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    costo_directo: number;

    @Column()
    costo_variable: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
