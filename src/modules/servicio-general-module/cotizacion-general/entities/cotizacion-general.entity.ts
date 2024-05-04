import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CotizacionGeneral {
    
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

    @Column()
    costo_total: number;

    @Column()
    descuento: number;

    @Column()
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
