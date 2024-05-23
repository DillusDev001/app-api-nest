import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cuenta {

    @PrimaryColumn()
    id_cuenta: number;

    @Column()
    id_servicio: number;

    @Column()
    banco: string;

    @Column()
    nro_cuenta: string;

    @Column()
    a_nombre: string;

    @Column()
    img: string;

    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;
    
    @Column()
    user_mod: string;

}