import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import * as ip from 'ip';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PROTOCOL = process.env.PROTOCOL;
  const myIp = ip.address();
  const PORT = process.env.PORT;

  app.enableCors();
  app.use(compression());

  await app.listen(PORT);

  console.log(`HANGANGGAK Server running: ${PROTOCOL}://${myIp}:${PORT}`);
}
void bootstrap();
