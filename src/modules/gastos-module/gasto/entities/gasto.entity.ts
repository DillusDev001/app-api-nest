import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Gasto {

    @PrimaryColumn()
    codigo_gasto: string;

    @Column()
    version: string;

    @Column()
    fec_vigencia: string;

    @Column()
    registro: string;

    @Column()
    tipo_gasto: string;


    @Column()
    area: string;

    @Column()
    fec_emision: string;

    @Column()
    id_proveedor: number;


    @Column()
    tipo_cambio: number;

    @Column()
    tipo_pago: string;

    @Column()
    tiempo_credito: string;

    @Column()
    descripcion: string;

    @Column()
    fec_entrega: string;


    @Column()
    sub_total: number;

    @Column()
    descuento: number;

    @Column()
    total_bs: number;

    @Column()
    total_sus: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
