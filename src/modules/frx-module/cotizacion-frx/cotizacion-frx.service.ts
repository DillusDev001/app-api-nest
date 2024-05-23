import { Injectable } from '@nestjs/common';
import { CotizacionFrxDto } from './dto/cotizacion-frx.dto';
import { UpdateCotizacionFrxDto } from './dto/update-cotizacion-frx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CotizacionFrx } from './entities/cotizacion-frx.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class CotizacionFrxService {

  constructor(@InjectRepository(CotizacionFrx) private cotizacionFrxRepository: Repository<CotizacionFrx>) { }

  async create(cotizacionFrxDto: CotizacionFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.cotizacionFrxRepository.create(cotizacionFrxDto);
    const add = await this.cotizacionFrxRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Cotización: ' + cotizacionFrxDto.cod_cotizacion + ' se ha agregado correctamente.';
    serviceResult.object = add;

    return serviceResult;
  }

  async find(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.cotizacionFrxRepository
      .createQueryBuilder()
      .where("cod_cotizacion like :cod_cotizacion", { cod_cotizacion: '%' + cod_cotizacion + '%' })
      .getMany()

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' cotización encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findNow(fec_solicitud: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.cotizacionFrxRepository
      .createQueryBuilder()
      .where("fec_solicitud = :fec_solicitud", { fec_solicitud: fec_solicitud })
      .orderBy("cod_cotizacion", "DESC")
      .limit(1)
      .getMany();

    const count = result.length;

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' cotización encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.cotizacionFrxRepository.find({ order: { cod_cotizacion: "DESC" } });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' cotización encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_cotizacion: string, updateCotizacionFrxDto: UpdateCotizacionFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.cotizacionFrxRepository.update(cod_cotizacion, updateCotizacionFrxDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.cotizacionFrxRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = 'Se ha eliminado correctamente.';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
