import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { APP_ORIGIN, APP_PORT } from "./core/constants/environment";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);

  app.enableCors({
    origin: APP_ORIGIN,
  });

  console.log(`APP is running on PORT: ${APP_PORT}`);
}
bootstrap();
