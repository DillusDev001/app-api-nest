import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionGeneralController } from './cotizacion-general.controller';
import { CotizacionGeneralService } from './cotizacion-general.service';

describe('CotizacionGeneralController', () => {
  let controller: CotizacionGeneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionGeneralController],
      providers: [CotizacionGeneralService],
    }).compile();

    controller = module.get<CotizacionGeneralController>(CotizacionGeneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
