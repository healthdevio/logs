import { Injectable } from "@nestjs/common";
import { BusinessException } from "src/core/exception/business-exception/business-exception";
import { CategoryRepository } from "src/core/repositories/category/category.repository";

@Injectable()
export class FindCategoryByNameUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async execute(categoryName: string) {
    const category = await this.categoryRepository.findByName(categoryName);
    if (!category) {
      throw new BusinessException("Categoria inválida!");
    }

    return category;
  }
}
