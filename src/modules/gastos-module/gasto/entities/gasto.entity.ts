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


    @Column('decimal', { precision: 10, scale: 2 })
    tipo_cambio: number;

    @Column()
    tipo_pago: string;

    @Column()
    tiempo_credito: string;

    @Column()
    descripcion: string;

    @Column()
    fec_entrega: string;


    @Column('decimal', { precision: 10, scale: 2 })
    sub_total: number;

    @Column('decimal', { precision: 10, scale: 2 })
    descuento: number;

    @Column('decimal', { precision: 10, scale: 2 })
    total_bs: number;

    @Column('decimal', { precision: 10, scale: 2 })
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
