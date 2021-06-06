import { CategoryUpdatedDomainEvent } from '@modules/category/domain/events/category-updated.domain-event'

export interface IOnCategoryUpdatedDomainEventHandler {
  onCategoryDeleted(event: CategoryUpdatedDomainEvent): Promise<void>
}
