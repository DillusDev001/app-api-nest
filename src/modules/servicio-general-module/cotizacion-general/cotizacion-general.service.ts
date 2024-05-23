import { Injectable } from '@nestjs/common';
import { CotizacionGeneralDto } from './dto/cotizacion-general.dto';
import { UpdateCotizacionGeneralDto } from './dto/update-cotizacion-general.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CotizacionGeneral } from './entities/cotizacion-general.entity';
import { Repository } from 'typeorm';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class CotizacionGeneralService {

  constructor(@InjectRepository(CotizacionGeneral) private cotizacionGeneralRepository: Repository<CotizacionGeneral>) { }

  async create(cotizacionFrxDto: CotizacionGeneral): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.cotizacionGeneralRepository.create(cotizacionFrxDto);
    const add = await this.cotizacionGeneralRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'Cotización: ' + cotizacionFrxDto.cod_cotizacion + ' se ha agregado correctamente.';
    serviceResult.object = add;

    return serviceResult;
  }

  async find(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.cotizacionGeneralRepository
      .createQueryBuilder("cotizacion_general")
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

    const result = await this.cotizacionGeneralRepository
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
    const result = await this.cotizacionGeneralRepository.find({ order: { cod_cotizacion: "DESC" } });
    const count = result.length;

    serviceResult.boolean = true;
    serviceResult.message = count + ' cotización encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_cotizacion: string, updateCotizacionFrxDto: UpdateCotizacionGeneralDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.cotizacionGeneralRepository.update(cod_cotizacion, updateCotizacionFrxDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = 'Se ha actualizado correctamente.';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.cotizacionGeneralRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = 'Se ha eliminado correctamente.';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
