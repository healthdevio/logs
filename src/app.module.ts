import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HealthModule } from "./core/health/health.module";

@Module({
  imports: [ConfigModule.forRoot(), HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
