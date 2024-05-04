import { Module } from '@nestjs/common';
import { CotizacionGeneralService } from './cotizacion-general.service';
import { CotizacionGeneralController } from './cotizacion-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotizacionGeneral } from '../cotizacion-general/entities/cotizacion-general.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CotizacionGeneral])],
  controllers: [CotizacionGeneralController],
  providers: [CotizacionGeneralService],
})
export class CotizacionGeneralModule {}
