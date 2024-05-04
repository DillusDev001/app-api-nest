import { Test, TestingModule } from '@nestjs/testing';
import { RecepcionFrxController } from './recepcion-frx.controller';
import { RecepcionFrxService } from './recepcion-frx.service';

describe('RecepcionFrxController', () => {
  let controller: RecepcionFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecepcionFrxController],
      providers: [RecepcionFrxService],
    }).compile();

    controller = module.get<RecepcionFrxController>(RecepcionFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
