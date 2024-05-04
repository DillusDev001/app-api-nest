import { Test, TestingModule } from '@nestjs/testing';
import { GastoDetalleController } from './gasto-detalle.controller';
import { GastoDetalleService } from './gasto-detalle.service';

describe('GastoDetalleController', () => {
  let controller: GastoDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GastoDetalleController],
      providers: [GastoDetalleService],
    }).compile();

    controller = module.get<GastoDetalleController>(GastoDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
