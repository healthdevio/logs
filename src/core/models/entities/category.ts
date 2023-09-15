import { Log } from "./log";

export class Category {
  id: string;
  description: string;
  fatherCategoryId: string;
  fatherCategory?: Category;
  createdAt: Date;
  updatedAt?: Date;
  subCategories: Category[];
  logs: Log[];
  logsSubCategory: Log[];
}
