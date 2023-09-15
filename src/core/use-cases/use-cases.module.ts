import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
import { FindCategoryByNameUseCase } from "./categories/find-by-name/find-category-by-name.use-case";
import { CreateEventUseCase } from "./events/create/create-event.use-case";
import { ListEventsUseCase } from "./events/list/list-events.use-case";
import { VerifyConnectionHeathUseCase } from "./health/verify-connection-heath/verify-connection-heath.use-case";
import { FindPersonByUserIdUseCase } from "./person/find-person-by-user-id/find-person-by-user-id.use-cases";

const health = [VerifyConnectionHeathUseCase];

const person = [FindPersonByUserIdUseCase];

const categories = [FindCategoryByNameUseCase];

const events = [CreateEventUseCase, ListEventsUseCase];

const providers: Provider[] = [...health, ...person, ...categories, ...events];

@Module({
  imports: [RepositoriesModule],
  exports: providers,
  providers,
})
export class UseCasesModule {}
