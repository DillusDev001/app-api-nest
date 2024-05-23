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
import { ProveedorModule } from './modules/gastos-module/proveedor/proveedor.module';
import { GastoModule } from './modules/gastos-module/gasto/gasto.module';
import { GastoDetalleModule } from './modules/gastos-module/gasto-detalle/gasto-detalle.module';
import { CotizacionGeneralModule } from './modules/servicio-general-module/cotizacion-general/cotizacion-general.module';
import { CotizacionGeneralSubServicioModule } from './modules/servicio-general-module/cotizacion-general-sub-servicio/cotizacion-general-sub-servicio.module';
import { CuentaModule } from './modules/servicio-module/cuenta/cuenta.module';
import { OrdenFrxModule } from './modules/frx-module/orden-frx/orden-frx.module';

// ================================================================= \\


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }), // para evitar el error en http://localhost:3000
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Mudanzas*123',
      database: 'ingenialabDB',
      
      autoLoadEntities: true,
      dropSchema: false,
      synchronize: false
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
    CuentaModule,
    SubServicioModule,

    CotizacionFrxModule,
    MuestraFrxModule,
    ParametroFrxModule,
    MuestraParametroFrxModule,
    RecepcionFrxModule,
    OrdenFrxModule,
    DocumentoFrxModule,

    CotizacionGeneralModule,
    CotizacionGeneralSubServicioModule,
  
    ProveedorModule,
    GastoModule,
    GastoDetalleModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
