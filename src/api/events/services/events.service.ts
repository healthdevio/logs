import { Injectable } from "@nestjs/common";
import { AuthenticationService } from "src/core/authentication/authentication.service";
import { CreateEventDto } from "src/core/models/dto/create-event.dto";
import { FilterEventDto } from "src/core/models/dto/filter-event.dto";
import { FindCategoryByNameUseCase } from "src/core/use-cases/categories/find-by-name/find-category-by-name.use-case";
import { CreateEventUseCase } from "src/core/use-cases/events/create/create-event.use-case";
import { ListEventsUseCase } from "src/core/use-cases/events/list/list-events.use-case";
import { FindPersonByUserIdUseCase } from "src/core/use-cases/person/find-person-by-user-id/find-person-by-user-id.use-cases";

@Injectable()
export class EventsService {
  constructor(
    private readonly auth: AuthenticationService,
    private readonly findPersonByUserIdUseCase: FindPersonByUserIdUseCase,
    private readonly findCategoryByNameUseCase: FindCategoryByNameUseCase,
    private readonly createEventUseCase: CreateEventUseCase,
    private readonly listEventsUseCase: ListEventsUseCase
  ) {}

  async listEvents({ category, objectId, page, size }: FilterEventDto) {
    return this.listEventsUseCase.execute({ category, objectId, page, size });
  }

  async createEvent({
    description,
    userPersonName,
    username,
    category,
    subCategory,
    action,
    customData,
    objectId,
    source,
  }: CreateEventDto) {
    const { sub: userId, username: tokenUserName } =
      this.auth.decodeByRequest();
    let categoryId: string;
    let subCategoryId: string;

    if (!username && tokenUserName) {
      username = tokenUserName;
    }
    if (userId && !userPersonName) {
      const { name } = await this.findPersonByUserIdUseCase.execute(userId);
      userPersonName = name;
    }

    if (category) {
      const { id } = await this.findCategoryByNameUseCase.execute(category);
      categoryId = id;
    }

    if (subCategory) {
      const { id } = await this.findCategoryByNameUseCase.execute(subCategory);
      subCategoryId = id;
    }
    //redeploy

    return this.createEventUseCase.execute({
      action,
      categoryId,
      customData,
      objectId,
      source,
      userId,
      subCategoryId,
      username,
      userPersonName,
      description,
    });
  }
}
