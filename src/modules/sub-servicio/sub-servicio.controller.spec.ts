import { Test, TestingModule } from '@nestjs/testing';
import { SubServicioController } from './sub-servicio.controller';
import { SubServicioService } from './sub-servicio.service';

describe('SubServicioController', () => {
  let controller: SubServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubServicioController],
      providers: [SubServicioService],
    }).compile();

    controller = module.get<SubServicioController>(SubServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
