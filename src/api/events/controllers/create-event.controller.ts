import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/core/authentication/jwt-auth.guard";
import { CreateEventDto } from "src/core/models/dto/create-event.dto";
import { EventsService } from "../services/events.service";

@UseGuards(JwtAuthGuard)
@Controller("events")
export class CreateEventController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() event: CreateEventDto) {
    return this.eventsService.createEvent(event);
  }
}
