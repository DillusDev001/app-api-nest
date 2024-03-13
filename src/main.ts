import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
    .addTag('auth')
    .addTag('usuario')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe()); // Se agrega la validacion global de todos los DTO's

  await app.listen(process.env.API_PORT);
}
bootstrap();
