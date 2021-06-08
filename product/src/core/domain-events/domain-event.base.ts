import { DateVO } from '@core/value-objects/date.value-object'

export abstract class DomainEvent {
  public readonly dateOccured = DateVO.now().value
}
