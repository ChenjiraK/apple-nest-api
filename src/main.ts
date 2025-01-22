import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true, // Optional, if you need cookies
  });
  // Cross-Site Scripting (XSS)
  // app.use(helmet({
  //   contentSecurityPolicy: {
  //     directives: {
  //       defaultSrc: ["'self'"],
  //       scriptSrc: ["'self'", "'unsafe-inline'"],
  //       objectSrc: ["'none'"],
  //       upgradeInsecureRequests: [],
  //     },
  //   },
  // }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
