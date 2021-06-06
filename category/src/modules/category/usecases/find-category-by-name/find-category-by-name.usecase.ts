import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'

@injectable()
export class FindCategoryByNameUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(categoryName: string): Promise<CategoryOrmEntity> {
    return this.categoryRepository.findByNameOrThrow(categoryName)
  }
}
