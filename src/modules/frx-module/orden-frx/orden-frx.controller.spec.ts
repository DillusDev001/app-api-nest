import { Test, TestingModule } from '@nestjs/testing';
import { OrdenFrxController } from './orden-frx.controller';
import { OrdenFrxService } from './orden-frx.service';

describe('OrdenFrxController', () => {
  let controller: OrdenFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenFrxController],
      providers: [OrdenFrxService],
    }).compile();

    controller = module.get<OrdenFrxController>(OrdenFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
