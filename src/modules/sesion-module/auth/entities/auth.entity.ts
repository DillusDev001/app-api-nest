import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity()
export class Auth {
    @PrimaryColumn()
    user: string;

    @Column()
    password: string

    @Column()
    pregunta: string

    @Column()
    respuesta: string 
}
