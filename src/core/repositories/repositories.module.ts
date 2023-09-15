import { Module, Provider } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { CategoryRepository } from "./category/category.repository";
import { PrismaCategoryRepository } from "./category/prisma-category.repository";
import { HealthRepository } from "./health/health.repository";
import { PrismaHealthRepository } from "./health/prisma.health.repository";
import { PersonRepository } from "./person/person.repository";
import { PrismaPersonRepository } from "./person/prisma-person.repository";

const health: Provider[] = [
  {
    provide: HealthRepository,
    useClass: PrismaHealthRepository,
  },
];

const person: Provider[] = [
  { provide: PersonRepository, useClass: PrismaPersonRepository },
];

const categories: Provider[] = [
  { provide: CategoryRepository, useClass: PrismaCategoryRepository },
];

const providers: Provider[] = [...health, ...person, ...categories];

@Module({ imports: [DatabaseModule], providers, exports: providers })
export class RepositoriesModule {}
