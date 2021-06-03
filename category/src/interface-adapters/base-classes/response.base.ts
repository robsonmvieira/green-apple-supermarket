import { Entity } from '@core/base-classes/entity.base'

export interface ResponseBaseProps {
  id?: string
  createdAt: string
  updatedAt: string
}
export class ResponseBase<T extends Entity> {
  createdAt: string
  updatedAt: string
  constructor(entity: T) {
    this.createdAt = String(entity.createdAt)
    this.updatedAt = String(entity.updatedAt)
  }
}
