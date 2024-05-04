import { PartialType } from '@nestjs/swagger';
import { DocumentoFrxDto } from './documento-frx.dto';

export class UpdateDocumentoFrxDto extends PartialType(DocumentoFrxDto) {

    cod_cotizacion: string;
    tipo: string;
    token: string;
    
}
