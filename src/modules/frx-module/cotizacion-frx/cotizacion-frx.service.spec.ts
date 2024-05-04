import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionFrxService } from './cotizacion-frx.service';

describe('CotizacionFrxService', () => {
  let service: CotizacionFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionFrxService],
    }).compile();

    service = module.get<CotizacionFrxService>(CotizacionFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
