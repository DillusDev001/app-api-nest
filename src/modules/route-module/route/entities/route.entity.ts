import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    id_route: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}
