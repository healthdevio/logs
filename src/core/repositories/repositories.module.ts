import { Module, Provider } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { HealthRepository } from "./health/health.repository";
import { PrismaHealthRepository } from "./health/prisma.health.repository";

const health: Provider[] = [
  {
    provide: HealthRepository,
    useClass: PrismaHealthRepository,
  },
];
const providers: Provider[] = [...health];

@Module({ imports: [DatabaseModule], providers, exports: providers })
export class RepositoriesModule {}
