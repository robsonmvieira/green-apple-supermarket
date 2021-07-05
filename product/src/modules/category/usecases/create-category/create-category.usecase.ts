import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'
import { CategoryEntity } from '@modules/category/domain/entities/category.entity'
import { CreateCategoryDto } from '@modules/category/dtos/create-category.dto'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name }: CreateCategoryDto): Promise<CategoryOrmEntity> {
    const newCategory = new CategoryEntity({ name }).toObject()
    const categoryOrm = Object.assign(newCategory, new CategoryOrmEntity())

    return this.categoryRepository.create(categoryOrm)
  }
}
