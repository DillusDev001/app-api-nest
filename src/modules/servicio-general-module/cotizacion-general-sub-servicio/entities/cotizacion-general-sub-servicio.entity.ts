import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'cotizacion_general_sub_servicios'})
export class CotizacionGeneralSubServicio {

    @PrimaryColumn()
    cod_cotizacion: string;

    @PrimaryColumn()
    id_sub_servicio: number;

    @Column('decimal', { precision: 10, scale: 2 })
    costo_sub_servicio: number;

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
