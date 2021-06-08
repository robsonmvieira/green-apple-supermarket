import { v4 as uuidV4 } from 'uuid'

import { DateVO } from '@core/value-objects/date.value-object'

export abstract class Entity<EntityProps> {
  id: string
  private readonly _createdAt: DateVO
  private _updatedAt: DateVO
  props: EntityProps

  constructor(props: EntityProps) {
    this.id = uuidV4()
    const now = DateVO.now()

    this._createdAt = now
    this._updatedAt = now
    this.props = props
  }

  get createdAt(): string {
    return this._createdAt.value
  }
  get updatedAt(): string {
    return this._updatedAt.value
  }

  public toObject(): unknown {
    const propsCopy = { ...this.props }
    const result = {
      id: this.id,
      createdAt: this._createdAt.value,
      updatedAt: this._updatedAt.value,
      ...propsCopy
    }
    return result
  }
}
