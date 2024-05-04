import { Module } from '@nestjs/common';
import { CotizacionGeneralSubServicioService } from './cotizacion-general-sub-servicio.service';
import { CotizacionGeneralSubServicioController } from './cotizacion-general-sub-servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotizacionGeneralSubServicio } from './entities/cotizacion-general-sub-servicio.entity';
import { SubServicioService } from 'src/modules/servicio-module/sub-servicio/sub-servicio.service';
import { SubServicio } from 'src/modules/servicio-module/sub-servicio/entities/sub-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CotizacionGeneralSubServicio]), TypeOrmModule.forFeature([SubServicio])],
  controllers: [CotizacionGeneralSubServicioController],
  providers: [CotizacionGeneralSubServicioService, SubServicioService],
})
export class CotizacionGeneralSubServicioModule {}
