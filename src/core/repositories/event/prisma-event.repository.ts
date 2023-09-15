import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/services/prisma/prisma.service";
import { CreateLog } from "src/core/models/entities/log";
import { EventsRepository } from "./events.repository";

@Injectable()
export class PrismaEventsRepository implements EventsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({
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
  }: Partial<CreateLog>): Promise<void> {
    console.log({
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

    await this.prisma.log.create({
      data: {
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
      },
    });
  }
}
