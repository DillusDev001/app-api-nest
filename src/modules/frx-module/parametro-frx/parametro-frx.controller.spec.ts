import { Test, TestingModule } from '@nestjs/testing';
import { ParametroFrxController } from './parametro-frx.controller';
import { ParametroFrxService } from './parametro-frx.service';

describe('ParametroController', () => {
  let controller: ParametroFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametroFrxController],
      providers: [ParametroFrxService],
    }).compile();

    controller = module.get<ParametroFrxController>(ParametroFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
