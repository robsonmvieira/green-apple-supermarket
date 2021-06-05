import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'

import { CategoryCreatedDomainEvent } from '../domain/events/category-created.domain-event'

export class OnCategoryCreatedDomainEventHandler
  implements IOnCategoryCreatedDomainEventHandler
{
  async onCategoryCreated(event: CategoryCreatedDomainEvent): Promise<void> {
    console.log(event)
  }
}
