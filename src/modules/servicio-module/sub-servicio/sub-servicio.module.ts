import { Module } from '@nestjs/common';
import { SubServicioService } from './sub-servicio.service';
import { SubServicioController } from './sub-servicio.controller';
import { SubServicio } from './entities/sub-servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubServicio])],
  controllers: [SubServicioController],
  providers: [SubServicioService],
})
export class SubServicioModule {}
