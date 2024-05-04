import { Module } from '@nestjs/common';
import { RecepcionFrxService } from './recepcion-frx.service';
import { RecepcionFrxController } from './recepcion-frx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecepcionFrx } from './entities/recepcion-frx.entity';
import { CotizacionFrx } from '../cotizacion-frx/entities/cotizacion-frx.entity';
import { CotizacionFrxService } from '../cotizacion-frx/cotizacion-frx.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecepcionFrx]), TypeOrmModule.forFeature([CotizacionFrx])],
  controllers: [RecepcionFrxController],
  providers: [RecepcionFrxService, CotizacionFrxService],
})
export class RecepcionFrxModule { }
