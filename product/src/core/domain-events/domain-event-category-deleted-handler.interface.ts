import { CategoryDeletedDomainEvent } from '@modules/category/domain/events/category-deleted.domain-event'

export interface IOnCategoryDeletedDomainEventHandler {
  onCategoryDeleted(event: CategoryDeletedDomainEvent): Promise<void>
}
