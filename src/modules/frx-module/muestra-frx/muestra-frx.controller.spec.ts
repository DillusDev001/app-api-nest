import { Test, TestingModule } from '@nestjs/testing';
import { MuestraFrxController } from './muestra-frx.controller';
import { MuestraFrxService } from './muestra-frx.service';

describe('MuestraFrxController', () => {
  let controller: MuestraFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuestraFrxController],
      providers: [MuestraFrxService],
    }).compile();

    controller = module.get<MuestraFrxController>(MuestraFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
