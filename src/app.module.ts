import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Auth } from './modules/auth/entities/auth.entity';
import { Usuario } from './modules/usuario/entities/usuario.entity';
import { CodeModule } from './modules/code/code.module';
import { Code } from './modules/code/entities/code.entity';
import { ContactoModule } from './modules/contacto/contacto.module';
import { Contacto } from './modules/contacto/entities/contacto.entity';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { PersonaModule } from './modules/persona/persona.module';
import { Persona } from './modules/persona/entities/persona.entity';
import { Empresa } from './modules/empresa/entities/empresa.entity';
import { TipoServicioModule } from './modules/tipo-servicio/tipo-servicio.module';
import { ServicioModule } from './modules/servicio/servicio.module';
import { SubServicioModule } from './modules/sub-servicio/sub-servicio.module';
import { RouteModule } from './modules/route/route.module';
import { Route } from './modules/route/entities/route.entity';
import { TipoServicio } from './modules/tipo-servicio/entities/tipo-servicio.entity';
import { Servicio } from './modules/servicio/entities/servicio.entity';
import { SubServicio } from './modules/sub-servicio/entities/sub-servicio.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }), // para evitar el error en http://localhost:3000
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Code, Auth, Usuario, Contacto, Empresa, Persona, Route, TipoServicio, Servicio, SubServicio],
      synchronize: false
    }),
    
    CodeModule,
    AuthModule,
    UsuarioModule,
    ContactoModule,
    EmpresaModule,
    PersonaModule,
    RouteModule,
    TipoServicioModule,
    ServicioModule,
    SubServicioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
