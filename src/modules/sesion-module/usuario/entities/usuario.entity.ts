import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryColumn()
  user: string;

  @Column()
  codigo: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  code: string;

  @Column()
  celular: string;

  @Column()
  telefono: string;

  @Column()
  ci: string;

  @Column()
  exp: string;

  // ========== \\
  @Column()
  fec_ingreso: string;

  @Column()
  fec_baja: string;

  @Column()
  banco: string;

  @Column()
  nro_cuenta: string;

  @Column()
  sexo: string;

  @Column()
  est_civil: string;

  @Column()
  fec_nac: string;

  // ========== \\
  @Column()
  rol: string;

  @Column()
  img: string;

  @Column()
  estado: number;

  @Column()
  fec_crea: string;

  @Column()
  user_mod: string;

  @Column()
  fec_mod: string;
}