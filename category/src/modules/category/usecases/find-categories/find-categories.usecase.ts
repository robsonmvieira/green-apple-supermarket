import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<CategoryOrmEntity[]> {
    return this.categoryRepository.findAll()
  }
}
