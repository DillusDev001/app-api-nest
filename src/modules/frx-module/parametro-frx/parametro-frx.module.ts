import { Module } from '@nestjs/common';
import { ParametroFrxService } from './parametro-frx.service';
import { ParametroFrxController } from './parametro-frx.controller';
import { ParametroFrx } from './entities/parametro-frx.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParametroFrx])],
  controllers: [ParametroFrxController],
  providers: [ParametroFrxService],
})
export class ParametroFrxModule {}
