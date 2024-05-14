import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { Gasto } from './entities/gasto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedor } from '../proveedor/entities/proveedor.entity';
import { ProveedorService } from '../proveedor/proveedor.service';
import { GastoDetalle } from '../gasto-detalle/entities/gasto-detalle.entity';
import { GastoDetalleService } from '../gasto-detalle/gasto-detalle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gasto]), TypeOrmModule.forFeature([Proveedor]), TypeOrmModule.forFeature([GastoDetalle])],
  controllers: [GastoController],
  providers: [GastoService, ProveedorService, GastoDetalleService],
})
export class GastoModule {}
