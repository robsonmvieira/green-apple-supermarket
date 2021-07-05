import { Entity } from '@core/base-classes/entity.base'
import { Product } from '@modules/product/database/product-orm.entity'

interface PhotoProps {
  id?: string
  productId: string
  fileName: string
  product: Product
}

export class Photo extends Entity<PhotoProps> {
  productId: string

  fileName: string

  product: Product
}
