import { Module } from '@nestjs/common';
import { TipoGastoService } from './tipo-gasto.service';
import { TipoGastoController } from './tipo-gasto.controller';
import { TipoGasto } from './entities/tipo-gasto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoGasto])],
  controllers: [TipoGastoController],
  providers: [TipoGastoService],
})
export class TipoGastoModule {}
