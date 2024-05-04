import { Module } from '@nestjs/common';
import { CotizacionFrxService } from './cotizacion-frx.service';
import { CotizacionFrxController } from './cotizacion-frx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotizacionFrx } from './entities/cotizacion-frx.entity';
import { Servicio } from 'src/modules/servicio-module/servicio/entities/servicio.entity';
import { ServicioService } from 'src/modules/servicio-module/servicio/servicio.service';

@Module({
  imports: [TypeOrmModule.forFeature([CotizacionFrx]), TypeOrmModule.forFeature([Servicio])],
  controllers: [CotizacionFrxController],
  providers: [CotizacionFrxService, ServicioService],
})
export class CotizacionFrxModule {}
