import { Test, TestingModule } from '@nestjs/testing';
import { MuestraFrxService } from './muestra-frx.service';

describe('MuestraFrxService', () => {
  let service: MuestraFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuestraFrxService],
    }).compile();

    service = module.get<MuestraFrxService>(MuestraFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
