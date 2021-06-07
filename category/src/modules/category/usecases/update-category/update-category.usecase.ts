import { inject, injectable } from 'tsyringe'

import { IOnCategoryUpdatedDomainEventHandler } from '@core/domain-events/domain-event-category-updated-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'
import { CategoryUpdatedDomainEvent } from '@modules/category/domain/events/category-updated.domain-event'
import { UpdateCategoryDto } from '@modules/category/dtos/update-category.dto'

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository,
    @inject('IOnCategoryUpdatedDomainEventHandler')
    private eventHandler: IOnCategoryUpdatedDomainEventHandler
  ) {}

  async execute(
    categoryId: string,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<CategoryOrmEntity> {
    const categoryUpdated = await this.categoryRepository.update(
      categoryId,
      updateCategoryDto
    )

    const categoryUpdatedDomainEvent = new CategoryUpdatedDomainEvent(
      categoryUpdated
    )

    this.eventHandler.onCategoryUpdated(categoryUpdatedDomainEvent)
    return categoryUpdated
  }
}
