import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MuestraParametroFrx {
    @PrimaryColumn()
    cod_cotizacion: string;

    @PrimaryColumn()
    muestra_sec: number;

    @PrimaryColumn()
    parametro_sec:number;

    @Column()
    id_parametro: number;

    @Column()
    cantidad: number;

    @Column()
    costo_parametro_unitario: number;

    @Column()
    costo_parametro_total: number;

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
