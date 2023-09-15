import { Category } from "src/core/models/entities/category";

export abstract class CategoryRepository {
  abstract findByName(categoryName: string): Promise<Partial<Category>>;
}
