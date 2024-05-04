import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoFrxController } from './documento-frx.controller';
import { DocumentoFrxService } from './documento-frx.service';

describe('DocumentoFrxController', () => {
  let controller: DocumentoFrxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentoFrxController],
      providers: [DocumentoFrxService],
    }).compile();

    controller = module.get<DocumentoFrxController>(DocumentoFrxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
