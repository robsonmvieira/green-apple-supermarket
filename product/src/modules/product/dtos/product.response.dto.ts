import {
  ResponseBase,
  ResponseBaseProps
} from '../../../interface-adapters/base-classes/response.base'
import { ProductOrmEntity } from '../database/product-orm.entity'
import { ProductEntity } from '../domain/entities/product.entity'

export interface ProductProps extends ResponseBaseProps {
  name: string
  price: string
  description: string
  promotionalPrice?: string
}

export class ProductResponse extends ResponseBase {
  name: string
  price: string
  description: string
  promotionalPrice?: string

  constructor(props: ProductEntity) {
    super(props)
    this.name = props.name
    this.price = props.price
    this.description = props.description
    this.promotionalPrice = props.promotionalPrice
      ? props.promotionalPrice
      : undefined
  }
}
