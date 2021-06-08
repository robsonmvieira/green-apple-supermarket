import { CategoryUpdatedDomainEvent } from '@modules/category/domain/events/category-updated.domain-event'

export interface IOnCategoryUpdatedDomainEventHandler {
  onCategoryUpdated(event: CategoryUpdatedDomainEvent): Promise<void>
}
