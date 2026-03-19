import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupRedDoc } from './shared/middlewares/redoc.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Stock-Pettech')
    .setDescription('API para gerenciamento de produtos no Stock Pettech')
    .setVersion('1.0')
    .addTag('stock')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  setupRedDoc(app);
  await app.listen(Number(process.env.PORT) || 3010);
}
bootstrap();
