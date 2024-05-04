import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Contacto {
    @PrimaryColumn()
    user: string;

    @PrimaryColumn()
    cont: number;

    @Column()
    nro_contacto: string;

    @Column()
    nombre_contacto: string;
}
