import { Test, TestingModule } from '@nestjs/testing';
import { ParametroFrxService } from './parametro-frx.service';

describe('ParametroService', () => {
  let service: ParametroFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametroFrxService],
    }).compile();

    service = module.get<ParametroFrxService>(ParametroFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
