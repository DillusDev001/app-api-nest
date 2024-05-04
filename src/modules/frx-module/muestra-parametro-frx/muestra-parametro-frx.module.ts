import { Module } from '@nestjs/common';
import { MuestraParametroFrxService } from './muestra-parametro-frx.service';
import { MuestraParametroFrxController } from './muestra-parametro-frx.controller';
import { MuestraParametroFrx } from './entities/muestra-parametro-frx.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametroFrx } from '../parametro-frx/entities/parametro-frx.entity';
import { ParametroFrxService } from '../parametro-frx/parametro-frx.service';

@Module({
  imports: [TypeOrmModule.forFeature([MuestraParametroFrx]), TypeOrmModule.forFeature([ParametroFrx])],
  controllers: [MuestraParametroFrxController],
  providers: [MuestraParametroFrxService, ParametroFrxService],
})
export class MuestraParametroFrxModule {}
