import { Injectable } from '@nestjs/common';
import { DocumentoFrxDto } from './dto/documento-frx.dto';
import { UpdateDocumentoFrxDto } from './dto/update-documento-frx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CotizacionFrxService } from '../cotizacion-frx/cotizacion-frx.service';
import { DocumentoFrx } from './entities/documento-frx.entity';
import { ServiceResult } from 'src/shared/interfaces/service.result';

@Injectable()
export class DocumentoFrxService {
  constructor(
    @InjectRepository(DocumentoFrx) private documentoRepository: Repository<DocumentoFrx>,
    private cotizacionFrxService: CotizacionFrxService
  ) { }

  async create(documentoFrxDto: DocumentoFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    // Agregar usuario a DB
    const newCode = this.documentoRepository.create(documentoFrxDto);
    await this.documentoRepository.save(newCode);

    serviceResult.boolean = true;
    serviceResult.message = 'DocumentoFrx se ha agregado correctamente.';

    return serviceResult;
  }

  async find(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const result = await this.documentoRepository
      .createQueryBuilder()
      .where("cod_cotizacion like :cod_cotizacion", { cod_cotizacion: '%' + cod_cotizacion + '%' })
      .getMany()

    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultCotizacion = await this.cotizacionFrxService.find(result[i].cod_cotizacion);

        if (resultCotizacion.boolean) {
          result[i]['cotizacion'] = resultCotizacion.data;
        }
      }
    }

    serviceResult.boolean = count > 0 ? true : false;
    serviceResult.message = count + ' documento(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async findAll(): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const result = await this.documentoRepository.find();
    const count = result.length;

    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const resultCotizacion = await this.cotizacionFrxService.find(result[i].cod_cotizacion);

        if (resultCotizacion.boolean) {
          result[i]['cotizacion'] = resultCotizacion.data;
        }
      }
    }

    serviceResult.boolean = true;
    serviceResult.message = count + ' documento(s) encontrado(s).';
    serviceResult.number = count;
    serviceResult.data = result;

    return serviceResult;
  }

  async update(cod_cotizacion: string, updateDocumentoFrxDto: UpdateDocumentoFrxDto): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;
    const updateAuth = await this.documentoRepository.update(cod_cotizacion, updateDocumentoFrxDto);

    serviceResult.boolean = updateAuth.affected === 1 ? true : false;
    serviceResult.message = updateAuth.affected === 1 ? 'Se ha actualizado correctamente.' : 'No se ha actualizado correctamente';
    serviceResult.number = updateAuth.affected;
    serviceResult.object = updateAuth;

    return serviceResult;
  }

  async remove(cod_cotizacion: string): Promise<ServiceResult> {
    let serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

    const remove = await this.documentoRepository.delete(cod_cotizacion);

    if (remove.affected === 1) {
      serviceResult.boolean = true;
      serviceResult.message = remove.affected + ' documento(s) eliminado(s).';
      serviceResult.number = remove.affected;
    }

    return serviceResult;
  }
}
