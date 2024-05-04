import { Test, TestingModule } from '@nestjs/testing';
import { MuestraParametroFrxController } from './muestra-parametro-frx.controller';
import { MuestraParametroFrxService } from './muestra-parametro-frx.service';

describe('MuestraParametroFrxController', () => {
  let controller: MuestraParametroFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuestraParametroFrxController],
      providers: [MuestraParametroFrxService],
    }).compile();

    controller = module.get<MuestraParametroFrxController>(MuestraParametroFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
