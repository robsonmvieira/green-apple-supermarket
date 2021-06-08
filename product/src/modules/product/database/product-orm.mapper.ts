import { ProductEntity } from '../domain/entities/product.entity'
import { ProductOrmEntity } from './product-orm.entity'

export class ProductOrmMapper {
  static fromOrmtoEntity(entity: ProductOrmEntity): ProductEntity {
    const props = { ...entity }
    const result = Object.assign(
      new ProductEntity({ id: props.id, name: props.name }),
      { ...props }
    )
    return result
  }

  static fromEntityToOrm(entity: ProductEntity): ProductOrmEntity {
    const props = { ...entity }
    const result = Object.assign(new ProductOrmEntity(), { ...props })
    return result
  }
}
