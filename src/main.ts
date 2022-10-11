import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//import { ConfigModule } from '@nestjs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  //ConfigModule.forRoot();
  try {
    console.info(`🚀 ✨ Listening on port ${process.env.PORT} ✨`);

    const config = new DocumentBuilder()
      .setTitle('API MANUE')
      .setDescription('Manue API, l app des artisans , qui facilite la vie des artisans et des clients')
      .setVersion('1.0')
      .addTag('manue')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT);
  } catch (error) {
    console.error(error, '😱 Error starting server');
  }
};

bootstrap();
