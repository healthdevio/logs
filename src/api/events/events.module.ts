import { Module } from "@nestjs/common";
import { AuthenticationModule } from "src/core/authentication/authentication.module";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";
import { CreateEventController } from "./controllers/create-event.controller";
import { EventsService } from "./services/events.service";

@Module({
  imports: [UseCasesModule, AuthenticationModule],
  controllers: [CreateEventController],
  providers: [EventsService],
})
export class EventsModule {}
