import { Module } from '@nestjs/common';
import { DocumentoFrxService } from './documento-frx.service';
import { DocumentoFrxController } from './documento-frx.controller';
import { DocumentoFrx } from './entities/documento-frx.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotizacionFrx } from '../cotizacion-frx/entities/cotizacion-frx.entity';
import { CotizacionFrxService } from '../cotizacion-frx/cotizacion-frx.service';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentoFrx]), TypeOrmModule.forFeature([CotizacionFrx])],
  controllers: [DocumentoFrxController],
  providers: [DocumentoFrxService, CotizacionFrxService],
})
export class DocumentoFrxModule {}
