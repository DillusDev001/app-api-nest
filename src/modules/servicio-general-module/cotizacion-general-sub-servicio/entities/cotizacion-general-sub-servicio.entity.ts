import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'cotizacion_general_sub_servicios'})
export class CotizacionGeneralSubServicio {

    @PrimaryColumn()
    cod_cotizacion: string;

    @PrimaryColumn()
    id_sub_servicio: number;

    @Column()
    costo_sub_servicio: number;

    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
