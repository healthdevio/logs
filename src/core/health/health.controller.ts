import { Controller, Get } from '@nestjs/common';
import { VerifyConnectionHeathUseCase } from '../use-cases/health/verify-connection-heath/verify-connection-heath.use-case';

@Controller()
export class HealthController {
  constructor(
    private readonly verifyConnectionUseCase: VerifyConnectionHeathUseCase,
  ) {}

  @Get()
  public healthcheck() {
    return this.verifyConnectionUseCase.execute();
  }
}
