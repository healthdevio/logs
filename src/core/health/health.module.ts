import { Module } from '@nestjs/common';
import { UseCasesModule } from '../use-cases/use-cases.module';
import { HealthController } from './health.controller';

@Module({ imports: [UseCasesModule], controllers: [HealthController] })
export class HealthModule {}
