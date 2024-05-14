import { Module } from '@nestjs/common';
import { OrdenTrabajoGeneralService } from './orden-trabajo-general.service';
import { OrdenTrabajoGeneralController } from './orden-trabajo-general.controller';

@Module({
  controllers: [OrdenTrabajoGeneralController],
  providers: [OrdenTrabajoGeneralService],
})
export class OrdenTrabajoGeneralModule {}
