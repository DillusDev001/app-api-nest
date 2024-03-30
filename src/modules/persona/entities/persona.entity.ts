import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Persona {
    @PrimaryGeneratedColumn()
    id_persona: number;

    @Column()
    nombre_persona: string;

    @Column()
    celular: string;

    @Column()
    email: string;

    @Column()
    razon: string;

    @Column()
    nit: string;

    @Column()
    id_empresa: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}