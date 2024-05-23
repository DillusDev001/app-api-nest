import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class OrdenFrx {

    @PrimaryColumn()
    cod_cotizacion: string;

    @Column()
    desde_fecha: string;

    @Column()
    hasta_fecha: string;

    @Column()
    lugar: string;

    @Column()
    asumido: string;

    @Column()
    incertidumbre: string;

    @Column()
    entrega: string;

    @Column()
    mediante: string;

    @Column()
    pago: string;

    @Column()
    pago_hasta: string;

    @Column()
    factura: string;
    
    @Column()
    factura_hasta: string;

}
