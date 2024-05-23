import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ParametroFrx {
    @PrimaryGeneratedColumn()
    id_parametro: number;

    @Column()
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    costo_directo: number;

    @Column('decimal', { precision: 10, scale: 2 })
    costo_variable: number;


    @Column()
    fec_crea: string;

    @Column()
    user_crea: string;

    @Column()
    fec_mod: string;

    @Column()
    user_mod: string;

}
