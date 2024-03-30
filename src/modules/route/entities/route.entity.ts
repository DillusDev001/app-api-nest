import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Route {
    @PrimaryGeneratedColumn()
    id_route: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}
