import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryEntity } from '@modules/category/domain/entities/category.entity'
// import { CategoryResponse } from '@modules/category/dtos/category.response.dto'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<CategoryEntity[]> {
    return this.categoryRepository.findAll()
  }
}
