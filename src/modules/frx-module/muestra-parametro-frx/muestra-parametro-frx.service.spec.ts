import { Test, TestingModule } from '@nestjs/testing';
import { MuestraParametroFrxService } from './muestra-parametro-frx.service';

describe('MuestraParametroFrxService', () => {
  let service: MuestraParametroFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuestraParametroFrxService],
    }).compile();

    service = module.get<MuestraParametroFrxService>(MuestraParametroFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
