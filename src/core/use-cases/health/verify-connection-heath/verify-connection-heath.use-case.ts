import { Injectable } from '@nestjs/common';
import { HealthRepository } from 'src/core/repositories/health/health.repository';
import { HealthResponse } from './../../../models/health/health.dto';

@Injectable()
export class VerifyConnectionHeathUseCase {
  constructor(private readonly healthRepository: HealthRepository) {}

  execute(): Promise<HealthResponse> {
    return this.healthRepository.verifyConnection();
  }
}
