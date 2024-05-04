import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Code {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    type: string;

    @Column()
    descripcion: string;

    @Column()
    var_string: string;

    @Column()
    var_number: number;

    @Column()
    count: number;

    @Column()
    user: string;

    @Column()
    estado: number;

}
