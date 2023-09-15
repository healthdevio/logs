import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/services/prisma/prisma.service";
import { Person } from "src/core/models/entities/person";
import { PersonRepository } from "./person.repository";

@Injectable()
export class PrismaPersonRepository implements PersonRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByUserId(userId: string): Promise<Partial<Person>> {
    const result = await this.prisma.$queryRaw`select 
      p.id::text,
      p."name"
    from healthdev.users u 
    inner join healthdev.persons p on p.id::text = u.person_id::text
    where 1=1 
    and u.id::text = ${userId}::text`;
    return result[0];
  }
}
