import { Entity } from '@core/base-classes/entity.base'

// import { CategoryProps } from './category.props'
export interface CategoryProps {
  id?: string
  name: string
}

export class CategoryEntity extends Entity<CategoryProps> {
  name: string

  constructor(payload: CategoryProps) {
    super(payload)
    if (payload.id) {
      this.id = payload.id
    }
    this.name = payload.name
  }
}
