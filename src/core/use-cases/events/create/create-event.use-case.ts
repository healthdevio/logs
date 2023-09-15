import { Injectable } from "@nestjs/common";
import { randomBytes, randomUUID } from "crypto";
import { CreateLog } from "src/core/models/entities/log";
import { EventsRepository } from "src/core/repositories/event/events.repository";

@Injectable()
export class CreateEventUseCase {
  constructor(private readonly eventsRepository: EventsRepository) {}

  public execute({
    action,
    categoryId,
    createdAt,
    customData,
    description,
    id,
    objectId,
    source,
    subCategoryId,
    userId,
    userPersonName,
    username,
  }: Partial<Omit<CreateLog, "trackId">>) {
    if (!id) {
      id = randomUUID();
    }

    const trackId = randomBytes(6).toString("hex");

    return this.eventsRepository.create({
      action,
      categoryId,
      createdAt,
      customData,
      description,
      id,
      objectId,
      source,
      subCategoryId,
      trackId,
      userId,
      userPersonName,
      username,
    });
  }
}
