import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventsModule } from "./api/events/events.module";
import { AuthenticationModule } from "./core/authentication/authentication.module";
import { HealthModule } from "./core/health/health.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    EventsModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
