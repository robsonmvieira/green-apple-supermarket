import { CategoryEntity } from '../domain/entities/category.entity'
import { CategoryOrmEntity } from './category-orm.entity'

export class CategoryOrmMapper {
  static fromOrmtoEntity(entity: CategoryOrmEntity): CategoryEntity {
    const props = { ...entity }
    const result = Object.assign(
      new CategoryEntity({ id: props.id, name: props.name }),
      { ...props }
    )
    return result
  }

  static fromEntityToOrm(entity: CategoryEntity): CategoryOrmEntity {
    const props = { ...entity }
    const result = Object.assign(new CategoryOrmEntity(), { ...props })
    return result
  }
}
