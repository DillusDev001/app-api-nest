import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionGeneralSubServicioController } from './cotizacion-general-sub-servicio.controller';
import { CotizacionGeneralSubServicioService } from './cotizacion-general-sub-servicio.service';

describe('CotizacionGeneralSubServicioController', () => {
  let controller: CotizacionGeneralSubServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionGeneralSubServicioController],
      providers: [CotizacionGeneralSubServicioService],
    }).compile();

    controller = module.get<CotizacionGeneralSubServicioController>(CotizacionGeneralSubServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
