import { inject, injectable } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'

@injectable()
export class RemoveCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(categoryId: string): Promise<boolean> {
    return this.categoryRepository.remove(categoryId)
  }
}
