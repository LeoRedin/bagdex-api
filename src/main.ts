import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/common/filter/exception.filter';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bágdex API')
    .setDescription('API simples para Bágdex')
    .setVersion('1.0')
    .addTag('bagdex')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  await app.listen(3000);
}
bootstrap();
