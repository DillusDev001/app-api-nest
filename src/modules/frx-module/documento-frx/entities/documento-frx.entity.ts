import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class DocumentoFrx {
    @PrimaryColumn()
    cod_cotizacion: string;

    @Column()
    tipo: string;

    @Column()
    token: string;

}
