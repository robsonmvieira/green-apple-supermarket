import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'
import { UpdateCategoryDto } from '@modules/category/dtos/update-category.dto'

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(
    categoryId: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<CategoryOrmEntity> {
    return this.categoryRepository.update(categoryId, updateCategoryDto)
  }
}
