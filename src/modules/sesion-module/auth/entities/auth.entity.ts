import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryColumn()
    user: string;

    @Column()
    password: string

    @Column({ type: 'varchar'})
    pregunta: string

    @Column({ type: 'varchar'})
    respuesta: string 
}
