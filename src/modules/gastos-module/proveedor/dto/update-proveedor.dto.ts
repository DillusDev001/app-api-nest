import { PartialType } from '@nestjs/swagger';
import { ProveedorDto } from './proveedor.dto';

export class UpdateProveedorDto extends PartialType(ProveedorDto) {}
