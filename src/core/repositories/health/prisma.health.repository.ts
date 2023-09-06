import { Injectable } from "@nestjs/common";
import { APPLICATION_NAME, APP_VERSION } from "src/core/constants/environment";
import { PrismaService } from "src/core/database/services/prisma/prisma.service";
import { HealthResponse } from "./../../models/health/health.dto";
import { HealthRepository } from "./health.repository";

@Injectable()
export class PrismaHealthRepository implements HealthRepository {
  constructor(private readonly db: PrismaService) {}

  async verifyConnection(): Promise<HealthResponse> {
    const initialTime = new Date().getTime();
    await this.db.$queryRaw`select current_date`;
    const finalTime = new Date().getTime();

    const latency = `${finalTime - initialTime}ms`;

    return {
      application: APPLICATION_NAME,
      healthy: true,
      latency,
      timestamp: new Date(),
      version: APP_VERSION,
    };
  }
}
