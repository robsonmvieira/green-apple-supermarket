import { Entity } from '@core/base-classes/entity.base'

// import { CategoryProps } from './category.props'
export interface CategoryProps {
  name: string
}

export class CategoryEntity extends Entity<CategoryProps> {
  name: string

  constructor(payload: CategoryProps) {
    super(payload)
    this.name = payload.name
  }
}
