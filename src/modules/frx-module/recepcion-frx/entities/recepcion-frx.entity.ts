import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RecepcionFrx {
    @PrimaryColumn()
    cod_cotizacion: string;

    @Column()
    fec_recepcion: string;

    @Column()
    user_recepcion: string;

    @Column()
    observaciones: string;


    @Column()
    user_asignado: string;

    @Column()
    fec_ini: string;

    @Column()
    fec_fin: string;

    @Column()
    estado: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
