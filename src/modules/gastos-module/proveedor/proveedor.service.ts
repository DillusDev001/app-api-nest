import { Injectable } from '@nestjs/common';
import { ProveedorDto } from './dto/proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedorService {
  create(proveedorDto: ProveedorDto) {
    return 'This action adds a new proveedor';
  }
}
