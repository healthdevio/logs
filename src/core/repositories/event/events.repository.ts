import { CreateLog } from "src/core/models/entities/log";

export abstract class EventsRepository {
  abstract create(data: Partial<CreateLog>): Promise<void>;
}
