import { Module } from '@nestjs/common';
import { OrdenFrxService } from './orden-frx.service';
import { OrdenFrxController } from './orden-frx.controller';
import { OrdenFrx } from './entities/orden-frx.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([OrdenFrx]) ],
  controllers: [OrdenFrxController],
  providers: [OrdenFrxService],
})
export class OrdenFrxModule {}
