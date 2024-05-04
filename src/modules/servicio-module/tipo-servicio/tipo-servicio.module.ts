import { Module } from '@nestjs/common';
import { TipoServicioService } from './tipo-servicio.service';
import { TipoServicioController } from './tipo-servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoServicio } from './entities/tipo-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoServicio])],
  controllers: [TipoServicioController],
  providers: [TipoServicioService],
})
export class TipoServicioModule {}
