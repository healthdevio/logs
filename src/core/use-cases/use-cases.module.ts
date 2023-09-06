import { Module, Provider } from "@nestjs/common";
import { VerifyConnectionHeathUseCase } from "./health/verify-connection-heath/verify-connection-heath.use-case";

const health = [VerifyConnectionHeathUseCase];

const providers: Provider[] = [...health];

@Module({
  exports: providers,
  providers,
})
export class UseCasesModule {}
