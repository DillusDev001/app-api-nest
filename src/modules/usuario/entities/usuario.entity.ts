import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryColumn()
  user: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  code: string;

  @Column()
  celular: string;

  @Column({ unique: true })
  ci: string;

  @Column()
  exp: string;

  @Column()
  rol: string;

  @Column({ type: 'int' })
  autorizacion: number;

  @Column()
  img: string;

  @Column({ type: 'int', default: 1 })
  estado: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fec_crea: string;

  @Column()
  user_mod: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fec_mod: string;
}
