import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ParametroFrx {
    @PrimaryGeneratedColumn()
    id_parametro: number;

    @Column()
    nombre: string;

    @Column()
    costo_directo: number;

    @Column()
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
