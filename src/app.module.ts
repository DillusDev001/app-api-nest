import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// ================================================================= \\
import { CodeModule } from './modules/code/code.module';

import { UsuarioModule } from './modules/sesion-module/usuario/usuario.module';
import { AuthModule } from './modules/sesion-module/auth/auth.module';
import { ContactoModule } from './modules/sesion-module/contacto/contacto.module';

import { RouteModule } from './modules/route-module/route/route.module';

import { PersonaModule } from './modules/cliente-module/persona/persona.module';
import { EmpresaModule } from './modules/cliente-module/empresa/empresa.module';

import { TipoServicioModule } from './modules/servicio-module/tipo-servicio/tipo-servicio.module';
import { ServicioModule } from './modules/servicio-module/servicio/servicio.module';
import { SubServicioModule } from './modules/servicio-module/sub-servicio/sub-servicio.module';

import { CotizacionFrxModule } from './modules/frx-module/cotizacion-frx/cotizacion-frx.module';
import { MuestraFrxModule } from './modules/frx-module/muestra-frx/muestra-frx.module';
import { ParametroFrxModule } from './modules/frx-module/parametro-frx/parametro-frx.module';
import { MuestraParametroFrxModule } from './modules/frx-module/muestra-parametro-frx/muestra-parametro-frx.module';
import { RecepcionFrxModule } from './modules/frx-module/recepcion-frx/recepcion-frx.module';
import { DocumentoFrxModule } from './modules/frx-module/documento-frx/documento-frx.module';
// ================================================================= \\

// ================================================================= \\
import { Code } from './modules/code/entities/code.entity';

import { Usuario } from './modules/sesion-module/usuario/entities/usuario.entity';
import { Auth } from './modules/sesion-module/auth/entities/auth.entity';
import { Contacto } from './modules/sesion-module/contacto/entities/contacto.entity';

import { Route } from './modules/route-module/route/entities/route.entity';

import { Empresa } from './modules/cliente-module/empresa/entities/empresa.entity';
import { Persona } from './modules/cliente-module/persona/entities/persona.entity';

import { TipoServicio } from './modules/servicio-module/tipo-servicio/entities/tipo-servicio.entity';
import { Servicio } from './modules/servicio-module/servicio/entities/servicio.entity';
import { SubServicio } from './modules/servicio-module/sub-servicio/entities/sub-servicio.entity';

import { CotizacionFrx } from './modules/frx-module/cotizacion-frx/entities/cotizacion-frx.entity';
import { MuestraFrx } from './modules/frx-module/muestra-frx/entities/muestra-frx.entity';
import { ParametroFrx } from './modules/frx-module/parametro-frx/entities/parametro-frx.entity';
import { MuestraParametroFrx } from './modules/frx-module/muestra-parametro-frx/entities/muestra-parametro-frx.entity';
import { RecepcionFrx } from './modules/frx-module/recepcion-frx/entities/recepcion-frx.entity';
import { DocumentoFrx } from './modules/frx-module/documento-frx/entities/documento-frx.entity';

import { CotizacionGeneral } from './modules/servicio-general-module/cotizacion-general/entities/cotizacion-general.entity';
import { CotizacionGeneralSubServicio } from './modules/servicio-general-module/cotizacion-general-sub-servicio/entities/cotizacion-general-sub-servicio.entity';

import { Area } from './modules/gastos-module/area/entities/area.entity';
import { AreaModule } from './modules/gastos-module/area/area.module';
import { ProveedorModule } from './modules/gastos-module/proveedor/proveedor.module';
import { TipoGastoModule } from './modules/gastos-module/tipo-gasto/tipo-gasto.module';
import { GastoModule } from './modules/gastos-module/gasto/gasto.module';
import { UnidadMedidaModule } from './modules/gastos-module/unidad-medida/unidad-medida.module';
import { GastoDetalleModule } from './modules/gastos-module/gasto-detalle/gasto-detalle.module';
import { CotizacionGeneralModule } from './modules/servicio-general-module/cotizacion-general/cotizacion-general.module';
import { CotizacionGeneralSubServicioModule } from './modules/servicio-general-module/cotizacion-general-sub-servicio/cotizacion-general-sub-servicio.module';

// ================================================================= \\


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }), // para evitar el error en http://localhost:3000
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Mudanzas*123',
      database: 'ingenialabDB',
      
      autoLoadEntities: true,
      synchronize: true
    }),

    CodeModule,

    AuthModule,
    UsuarioModule,
    ContactoModule,

    PersonaModule,
    EmpresaModule,

    RouteModule,

    TipoServicioModule,

    ServicioModule,
    SubServicioModule,

    CotizacionFrxModule,
    MuestraFrxModule,
    ParametroFrxModule,
    MuestraParametroFrxModule,
    RecepcionFrxModule,
    DocumentoFrxModule,

    CotizacionGeneralModule,
    CotizacionGeneralSubServicioModule,
    
    AreaModule,
    ProveedorModule,
    TipoGastoModule,
    GastoModule,
    UnidadMedidaModule,
    GastoDetalleModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
