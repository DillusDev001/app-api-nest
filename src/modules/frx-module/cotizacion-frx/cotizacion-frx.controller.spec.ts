import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionFrxController } from './cotizacion-frx.controller';
import { CotizacionFrxService } from './cotizacion-frx.service';

describe('CotizacionFrxController', () => {
  let controller: CotizacionFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionFrxController],
      providers: [CotizacionFrxService],
    }).compile();

    controller = module.get<CotizacionFrxController>(CotizacionFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
