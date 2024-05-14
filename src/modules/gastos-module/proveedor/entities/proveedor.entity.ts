import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proveedor {

    @PrimaryGeneratedColumn()
    id_proveedor: number;

    @Column()
    razon: string;

    @Column()
    nit: string;

    @Column()
    banco: string;

    @Column()
    nro_cuenta: string;

    @Column()
    beneficiario: string;

    @Column()
    moneda: string;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
