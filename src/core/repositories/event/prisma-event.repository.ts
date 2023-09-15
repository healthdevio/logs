import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/services/prisma/prisma.service";
import { DbQueryFilter } from "src/core/models/dto/db-query.filter";
import { CreateLog, Log } from "src/core/models/entities/log";
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

  list(
    filter?: DbQueryFilter<Omit<Log, "category" | "subCategory">>
  ): Promise<Partial<Log>[]> {
    return this.prisma.log.findMany({
      where: filter?.where,
      skip: filter?.skip,
      take: filter?.take,
      select: filter?.select,
    });
  }

  count(
    filter?: DbQueryFilter<Omit<Log, "category" | "subCategory">>
  ): Promise<number> {
    return this.prisma.log.count({ where: filter?.where });
  }
}
