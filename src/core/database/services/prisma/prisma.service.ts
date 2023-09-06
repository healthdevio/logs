import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { DB_LOG_LEVEL } from "src/core/constants/environment";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({ log: DB_LOG_LEVEL });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
