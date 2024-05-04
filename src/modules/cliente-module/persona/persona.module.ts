import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Empresa } from '../empresa/entities/empresa.entity';
import { EmpresaService } from '../empresa/empresa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]), TypeOrmModule.forFeature([Empresa])],
  controllers: [PersonaController],
  providers: [PersonaService, EmpresaService],
})
export class PersonaModule {}
