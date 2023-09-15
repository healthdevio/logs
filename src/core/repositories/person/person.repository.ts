import { Person } from "src/core/models/entities/person";

export abstract class PersonRepository {
  abstract findByUserId(userId: string): Promise<Partial<Person>>;
}
