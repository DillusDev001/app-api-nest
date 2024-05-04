import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MuestraFrx {
    @PrimaryColumn()
    cod_cotizacion: string;

    @PrimaryColumn()
    muestra_sec: number;

    @Column()
    costo_muestra: number;

    @Column()
    cod_interno: string;

    @Column()
    descripcion: string;

    @Column()
    observacion: string;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;
}
