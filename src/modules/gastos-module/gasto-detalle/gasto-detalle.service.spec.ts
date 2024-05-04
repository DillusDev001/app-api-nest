import { Test, TestingModule } from '@nestjs/testing';
import { GastoDetalleService } from './gasto-detalle.service';

describe('GastoDetalleService', () => {
  let service: GastoDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GastoDetalleService],
    }).compile();

    service = module.get<GastoDetalleService>(GastoDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
