import { ResponseBase } from '../../../interface-adapters/base-classes/response.base'
import { CategoryEntity } from '../domain/entities/category.entity'

export class CategoryResponse extends ResponseBase<CategoryEntity> {
  name: string
  constructor(category: CategoryEntity) {
    super(category)
    this.name = category.name
  }
}
