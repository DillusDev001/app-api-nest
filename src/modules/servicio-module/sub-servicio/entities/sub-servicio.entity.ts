import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sub_servicios'})
export class SubServicio {
    @PrimaryGeneratedColumn()
    id_sub_servicio: number;

    @PrimaryColumn()
    id_servicio: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;


    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)" })
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column("timestamp", { precision: 3, default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
    fec_mod: string;

    @Column()
    user_mod: string;

}
