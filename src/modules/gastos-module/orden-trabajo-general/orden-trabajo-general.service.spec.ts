import { Test, TestingModule } from '@nestjs/testing';
import { OrdenTrabajoGeneralService } from './orden-trabajo-general.service';

describe('OrdenTrabajoGeneralService', () => {
  let service: OrdenTrabajoGeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenTrabajoGeneralService],
    }).compile();

    service = module.get<OrdenTrabajoGeneralService>(OrdenTrabajoGeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
