import { DomainEvent } from '@core/domain-events/domain-event.base'

export interface CategoryCreatedDomainEventProps {
  id: string
  name: string
}

export class CategoryCreatedDomainEvent extends DomainEvent {
  constructor(readonly data: CategoryCreatedDomainEventProps) {
    super()
  }
}
