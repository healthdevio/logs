import { ShiftValidity } from "@prisma/client";
import { DbQueryFilter } from "src/core/models/dto/db-query.filter";
import { CreateLog, Log } from "src/core/models/entities/log";

export abstract class EventsRepository {
  abstract create(data: Partial<CreateLog>): Promise<void>;
  abstract list(
    filter?: DbQueryFilter<Omit<Log, "category" | "subCategory">>
  ): Promise<Partial<Log>[]>;
  abstract count(
    filter?: DbQueryFilter<Omit<Log, "category" | "subCategory">>
  ): Promise<number>;
  abstract findSchedulingValidity(schedulingId: string): Promise<ShiftValidity>
}
