import { Sources } from "@prisma/client";
import { Category } from "./category";

export class Log {
  id: string;
  category: Category;
  action?: string;
  description?: string;
  categoryId: string;
  objectId?: string;
  subCategory?: Category;
  subCategoryId?: string;
  userId?: string;
  username: string;
  userPersonName: string;
  source: Sources;
  trackId: string;
  customData?: string;
  createdAt: Date;
}
