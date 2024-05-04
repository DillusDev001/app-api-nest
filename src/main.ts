import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Cors access allowed

  app.use(json({ limit: '60mb' })); // Tamaño limite admitido

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI
  }); // Para la version del código http://localhost:3000/v1/ENDPOINT

  // Documentation
  const config = new DocumentBuilder()
    .addBearerAuth() // Autenticacion por token 
    .setTitle('Documentacion API NestJS InigeniaLab')
    .setDescription('IngeniaLab Api Documentation')
    .setVersion('1.0')

    .addTag('code')
    .addTag('usuario')
    .addTag('auth')
    .addTag('contacto')

    .addTag('route') //*
    .addTag('autorizacion-route') //*

    .addTag('empresa') //*
    .addTag('persona') //*

    .addTag('tipo-servicio')
    .addTag('servicio')
    .addTag('sub-servicio')

    .addTag('cotizacion-frx')
    .addTag('muestra-frx')
    .addTag('parametro-frx')
    .addTag('muestra-parametro-frx')
    .addTag('recepcion-frx')
    .addTag('documento-frx')

    .addTag('cotizacion-general')
    .addTag('cotizacion-general-sub-servicio')

    .addTag('area')
    .addTag('proveedor')
    .addTag('tipo-gasto')
    .addTag('gasto')
    .addTag('unidad-medida')
    .addTag('gasto-detalle')
    
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe()); // Se agrega la validacion global de todos los DTO's

  await app.listen(process.env.API_PORT);
}
bootstrap();
