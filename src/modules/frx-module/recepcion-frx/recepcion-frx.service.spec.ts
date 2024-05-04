import { Test, TestingModule } from '@nestjs/testing';
import { RecepcionFrxService } from './recepcion-frx.service';

describe('RecepcionFrxService', () => {
  let service: RecepcionFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecepcionFrxService],
    }).compile();

    service = module.get<RecepcionFrxService>(RecepcionFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
