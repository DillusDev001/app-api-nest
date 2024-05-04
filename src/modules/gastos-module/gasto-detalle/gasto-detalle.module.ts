import { Module } from '@nestjs/common';
import { GastoDetalleService } from './gasto-detalle.service';
import { GastoDetalleController } from './gasto-detalle.controller';
import { GastoDetalle } from './entities/gasto-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GastoDetalle])],
  controllers: [GastoDetalleController],
  providers: [GastoDetalleService],
})
export class GastoDetalleModule {}
