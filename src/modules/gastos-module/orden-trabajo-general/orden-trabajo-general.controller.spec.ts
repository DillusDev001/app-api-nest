import { Test, TestingModule } from '@nestjs/testing';
import { OrdenTrabajoGeneralController } from './orden-trabajo-general.controller';
import { OrdenTrabajoGeneralService } from './orden-trabajo-general.service';

describe('OrdenTrabajoGeneralController', () => {
  let controller: OrdenTrabajoGeneralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenTrabajoGeneralController],
      providers: [OrdenTrabajoGeneralService],
    }).compile();

    controller = module.get<OrdenTrabajoGeneralController>(OrdenTrabajoGeneralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
