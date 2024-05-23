import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CotizacionFrx {
    
    @PrimaryColumn()
    cod_cotizacion: string;

    @Column()
    fec_solicitud: string;

    @Column()
    fec_emision: string;

    @Column()
    id_servicio: number;

    @Column()
    id_persona: number;

    @Column()
    observacion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    costo_total: number;

    @Column('decimal', { precision: 10, scale: 2 })
    descuento: number;

    @Column('decimal', { precision: 10, scale: 2 })
    total_pagar: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;
    
}
