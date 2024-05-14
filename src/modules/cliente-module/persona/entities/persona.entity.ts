import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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


    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)" })
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
    fec_mod: string;

    @Column()
    user_mod: string;

}