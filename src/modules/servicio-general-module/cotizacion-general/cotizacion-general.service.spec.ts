import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionGeneralService } from './cotizacion-general.service';

describe('CotizacionGeneralService', () => {
  let service: CotizacionGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionGeneralService],
    }).compile();

    service = module.get<CotizacionGeneralService>(CotizacionGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
