import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn()
    id_empresa: number;

    @Column()
    razon_social: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    web: string;

    @Column()
    ciudad: string;

    @Column()
    pais: string;

    @Column()
    nit: string;

    @Column()
    tipo: string;

    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)" })
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
    fec_mod: string;

    @Column()
    user_mod: string;

}