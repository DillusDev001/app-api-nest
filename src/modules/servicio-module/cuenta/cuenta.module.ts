import { Module } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaController } from './cuenta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  
  imports: [
    TypeOrmModule.forFeature([Cuenta]),
    /*MulterModule.register({
      dest: './public/cuenta', // Carpeta donde se guardarán los archivos subidos
    }),*/
  ],
  controllers: [CuentaController],
  providers: [CuentaService],
})
export class CuentaModule {}
