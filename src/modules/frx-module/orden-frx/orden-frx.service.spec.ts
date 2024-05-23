import { Test, TestingModule } from '@nestjs/testing';
import { OrdenFrxService } from './orden-frx.service';

describe('OrdenFrxService', () => {
  let service: OrdenFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenFrxService],
    }).compile();

    service = module.get<OrdenFrxService>(OrdenFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
