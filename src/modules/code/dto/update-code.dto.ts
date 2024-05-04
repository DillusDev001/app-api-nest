import { PartialType } from '@nestjs/swagger';
import { CodeDto } from './code.dto';

export class UpdateCodeDto extends PartialType(CodeDto) {

    code: string;
    type: string;
    descripcion: string;
    var_string: string;
    var_number: number;
    count: number;
    user: string;
    estado: number;

}
