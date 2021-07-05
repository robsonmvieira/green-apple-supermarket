import { classToClass } from 'class-transformer'

import { ProductResponseDto } from '../dtos/product.response.dto'
import { Product } from './product-orm.entity'

export class ProductMapper {
  static transforToDto({
    id,
    name,
    price,
    promotionalPrice,
    images
  }: Product): ProductResponseDto {
    const product = classToClass({
      id,
      name,
      price,
      promotionalPrice,
      images
    })
    return product
  }
}
