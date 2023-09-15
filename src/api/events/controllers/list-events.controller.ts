import { Controller, Get, Query } from "@nestjs/common";
import { FilterEventDto } from "src/core/models/dto/filter-event.dto";
import { EventsService } from "../services/events.service";

@Controller("events")
export class ListEventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  public listEvents(@Query() query: FilterEventDto) {
    return this.eventsService.listEvents(query);
  }
}
