import { HealthResponse } from './../../models/health/health.dto';

export abstract class HealthRepository {
  abstract verifyConnection(): Promise<HealthResponse>;
}
