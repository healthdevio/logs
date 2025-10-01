import { Injectable } from "@nestjs/common";
import { PaginationHelper } from "src/core/helpers/pagination.helper";
import { Where } from "src/core/models/dto/db-query.filter";
import { FilterEventDto } from "src/core/models/dto/filter-event.dto";
import { Log } from "src/core/models/entities/log";
import { CategoryRepository } from "src/core/repositories/category/category.repository";
import { EventsRepository } from "src/core/repositories/event/events.repository";

/**
 * This class now lists only:
 * For object id
 * For a specific category
 * This have to be improved before, for now is ok
 */

@Injectable()
export class ListEventsUseCase {
  constructor(
    private readonly eventsRepository: EventsRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}
  public async execute({ category, objectId, page, size, isScheduling }: FilterEventDto) {
    let objectIds: string[] = [ objectId ]

    // buscar as mudanças da vigência relacionada ao agendamento 
    if(isScheduling){
      const validity = await this.eventsRepository.findSchedulingValidity(objectId)
      if(validity){
        objectIds.push(validity.id)
      }
    }

    const where: Where<Log> = {
      AND: [{ objectId:{
        in: objectIds
      } }],
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
