import { Module } from "@nestjs/common";
import { AuthenticationModule } from "src/core/authentication/authentication.module";
import { UseCasesModule } from "src/core/use-cases/use-cases.module";
import { CreateEventController } from "./controllers/create-event.controller";
import { ListEventsController } from "./controllers/list-events.controller";
import { EventsService } from "./services/events.service";

@Module({
  imports: [UseCasesModule, AuthenticationModule],
  controllers: [CreateEventController, ListEventsController],
  providers: [EventsService],
})
export class EventsModule {}
