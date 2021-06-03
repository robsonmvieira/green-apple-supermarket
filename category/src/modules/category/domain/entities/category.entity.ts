import { Entity } from '@core/base-classes/entity.base'

import { CategoryProps } from './category.props'

export class CategoryEntity extends Entity {
  name: string

  constructor(props: CategoryProps) {
    super()
    this.name = props.name
  }
}
