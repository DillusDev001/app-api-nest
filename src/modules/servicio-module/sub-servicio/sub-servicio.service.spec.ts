import { Test, TestingModule } from '@nestjs/testing';
import { SubServicioService } from './sub-servicio.service';

describe('SubServicioService', () => {
  let service: SubServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubServicioService],
    }).compile();

    service = module.get<SubServicioService>(SubServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
