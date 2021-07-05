import { DomainEvent } from '@core/domain-events/domain-event.base'

export interface CategoryUpdatedDomainEventProps {
  id: string
  name: string
}

export class CategoryUpdatedDomainEvent extends DomainEvent {
  constructor(readonly data: CategoryUpdatedDomainEventProps) {
    super()
  }
}
