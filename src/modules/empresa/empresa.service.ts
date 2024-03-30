import { Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto/empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  create(empresaDto: EmpresaDto) {
    return 'This action adds a new empresa';
  }

  
}
