import { CategoryCreatedDomainEvent } from '@modules/category/domain/events/category-created.domain-event'

export interface IOnCategoryCreatedDomainEventHandler {
  onCategoryCreated(event: CategoryCreatedDomainEvent): Promise<void>
}
