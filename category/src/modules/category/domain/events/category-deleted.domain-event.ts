import { DomainEvent } from '@core/domain-events/domain-event.base'

export interface CategoryDeletedDomainEventProps {
  id: string
}

export class CategoryDeletedDomainEvent extends DomainEvent {
  constructor(readonly data: CategoryDeletedDomainEventProps) {
    super()
  }
}
