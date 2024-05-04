import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionGeneralSubServicioService } from './cotizacion-general-sub-servicio.service';

describe('CotizacionGeneralSubServicioService', () => {
  let service: CotizacionGeneralSubServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionGeneralSubServicioService],
    }).compile();

    service = module.get<CotizacionGeneralSubServicioService>(CotizacionGeneralSubServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
