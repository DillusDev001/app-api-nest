import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class GastoDetalle {

    @PrimaryColumn()
    codigo_gasto: string;

    @PrimaryColumn()
    sec: number;

    @Column()
    descripcion: string;

    @Column()
    cantidad: number;

    @Column()
    unidad_medida: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio_unidad: number;

    @Column('decimal', { precision: 10, scale: 2 })
    precio_total: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;
}
