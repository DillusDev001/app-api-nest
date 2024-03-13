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
    estado: string;

}
