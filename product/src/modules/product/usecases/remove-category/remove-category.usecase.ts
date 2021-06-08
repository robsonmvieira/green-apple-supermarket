import { inject, injectable } from 'tsyringe'

import { IOnCategoryDeletedDomainEventHandler } from '@core/domain-events/domain-event-category-deleted-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryDeletedDomainEvent } from '@modules/category/domain/events/category-deleted.domain-event'

@injectable()
export class RemoveCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository,
    @inject('IOnCategoryDeletedDomainEventHandler')
    private eventHandler: IOnCategoryDeletedDomainEventHandler
  ) {}

  async execute(categoryId: string): Promise<boolean> {
    const categoryDeleted = await this.categoryRepository.remove(categoryId)

    if (categoryDeleted) {
      const deleteCategoryDomainEvent = new CategoryDeletedDomainEvent({
        id: categoryId
      })

      this.eventHandler.onCategoryDeleted(deleteCategoryDomainEvent)
    }

    return categoryDeleted
  }
}
