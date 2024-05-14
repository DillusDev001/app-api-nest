import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicio {
    @PrimaryGeneratedColumn()
    id_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    id_tipo_servicio: number;


    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)" })
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
    fec_mod: string;

    @Column()
    user_mod: string;

}
