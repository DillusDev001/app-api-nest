import { Module } from '@nestjs/common';
import { MuestraFrxService } from './muestra-frx.service';
import { MuestraFrxController } from './muestra-frx.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuestraFrx } from './entities/muestra-frx.entity';
import { MuestraParametroFrx } from '../muestra-parametro-frx/entities/muestra-parametro-frx.entity';
import { MuestraParametroFrxService } from '../muestra-parametro-frx/muestra-parametro-frx.service';
import { ParametroFrx } from '../parametro-frx/entities/parametro-frx.entity';
import { ParametroFrxService } from '../parametro-frx/parametro-frx.service';

@Module({
  imports: [TypeOrmModule.forFeature([MuestraFrx]), TypeOrmModule.forFeature([MuestraParametroFrx]), TypeOrmModule.forFeature([ParametroFrx])], 
  controllers: [MuestraFrxController],
  providers: [MuestraFrxService, MuestraParametroFrxService, ParametroFrxService],
})
export class MuestraFrxModule {}