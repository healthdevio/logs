import { Injectable } from "@nestjs/common";
import { PaginationHelper } from "src/core/helpers/pagination.helper";
import { Where } from "src/core/models/dto/db-query.filter";
import { FilterEventDto } from "src/core/models/dto/filter-event.dto";
import { Log } from "src/core/models/entities/log";
import { CategoryRepository } from "src/core/repositories/category/category.repository";
import { EventsRepository } from "src/core/repositories/event/events.repository";

@Injectable()
export class ListEventsUseCase {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}
  public async execute({ category, objectId, page, size }: FilterEventDto) {
    const where: Where<Log> = {
      AND: [{ objectId }],
    };

    if (category) {
      const { id: categoryId } = await this.categoryRepository.findByName(
        category
      );

      where.AND.push({
        categoryId,
      });
    }

    const { skip, take } = PaginationHelper.toDbQuery({ page, size });

    const total = await this.eventsRepository.count({
      where,
    });
    const rows = await this.eventsRepository.list({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });

    return { total, rows };
  }
}
