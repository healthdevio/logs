import { Module, Provider } from "@nestjs/common";
import { RepositoriesModule } from "../repositories/repositories.module";
import { VerifyConnectionHeathUseCase } from "./health/verify-connection-heath/verify-connection-heath.use-case";

const health = [VerifyConnectionHeathUseCase];

const providers: Provider[] = [...health];

@Module({
  imports: [RepositoriesModule],
  exports: providers,
  providers,
})
export class UseCasesModule {}
