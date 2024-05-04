import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoFrxService } from './documento-frx.service';

describe('DocumentoFrxService', () => {
  let service: DocumentoFrxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentoFrxService],
    }).compile();

    service = module.get<DocumentoFrxService>(DocumentoFrxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
