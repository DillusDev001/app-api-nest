import { Injectable } from '@nestjs/common';
import { GastoDto } from './dto/gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';
import { ProveedorService } from '../proveedor/proveedor.service';
import { GastoDetalleService } from '../gasto-detalle/gasto-detalle.service';

@Injectable()
export class GastoService {

  constructor(
    @InjectRepository(Gasto)
    private gastoRepository: Repository<Gasto>,
    private proveedorService: ProveedorService,
    private gastoDetalleService: GastoDetalleService
  ) { }

  async create(gastoDto: GastoDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    console.log(gastoDto);
    // Agregar usuario a DB
    const newCode = this.gastoRepository.create(gastoDto);
    await this.gastoRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Gasto: ' + gastoDto.codigo_gasto + ' se ha agregado correctamente.';

    return serviceResult;
  }

  async find(codigo_gasto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.gastoRepository
      .createQueryBuilder()
      .where("codigo_gasto like :codigo_gasto", { codigo_gasto: '%' + codigo_gasto + '%' })
      .getMany()

    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultProveedor = await this.proveedorService.findById(result[i].id_proveedor);

        if (resultProveedor.boolean) {
          result[i]['proveedor'] = resultProveedor.data[0];
        }
      }

      for (let j = 0; j < count; j++) {
        const resultDetalle = await this.gastoDetalleService.findAll(result[j].codigo_gasto);

        if (resultDetalle.boolean) {
          result[j]['detalle'] = resultDetalle.data;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' gasto(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.gastoRepository.find();
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        //const id
        const resultProveedor = await this.proveedorService.findById(result[i].id_proveedor);

        if (resultProveedor.boolean) {
          result[i]['proveedor'] = resultProveedor.data[0];
        }
      }

      for (let j = 0; j < count; j++) {
        const resultDetalle = await this.gastoDetalleService.findAll(result[j].codigo_gasto);

        if (resultDetalle.boolean) {
          result[j]['detalle'] = resultDetalle.data;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' gasto(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAtribute(attribute: string, value: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.gastoRepository
      .createQueryBuilder()
      .where(attribute + " like :value", { value: '%' + value + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' gastos(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(codigo_gasto: string, updateGastoDto: UpdateGastoDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.gastoRepository.update(codigo_gasto, updateGastoDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(codigo_gasto: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.gastoRepository.delete(codigo_gasto);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = 'Se ha eliminado correctamente.';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }

  async findLastCode(area: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.gastoRepository
      .createQueryBuilder()
      .where("area = :area", { area: area })
      .orderBy("codigo_gasto", "DESC")
      .limit(1)
      .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' gasto(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }
}
