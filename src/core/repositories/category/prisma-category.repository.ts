import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/database/services/prisma/prisma.service";
import { Category } from "src/core/models/entities/category";
import { CategoryRepository } from "./category.repository";

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByName(categoryName: string): Promise<Partial<Category>> {
    return this.prisma.category.findFirst({
      where: {
        description: categoryName,
      },
    });
  }
}
