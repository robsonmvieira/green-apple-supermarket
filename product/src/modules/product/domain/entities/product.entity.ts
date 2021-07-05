import { Entity } from '@core/base-classes/entity.base'
import { Photo } from '@modules/photo/domain/photo.entity'

// import { CategoryProps } from './category.props'
export interface ProductProps {
  id?: string
  name: string
  price: string
  description: string
  promotionalPrice?: string
  categoryId: string
  images: Photo[]
}

export class ProductEntity extends Entity<ProductProps> {
  name: string
  price: string
  description: string
  promotionalPrice?: string
  categoryId: string
  images: Photo[]

  constructor(payload: ProductProps) {
    super(payload)
    if (payload.id) {
      this.id = payload.id
    }
    this.name = payload.name
    this.price = payload.price
    this.description = payload.description
    this.promotionalPrice = payload.promotionalPrice
    this.categoryId = payload.categoryId
    this.images = payload.images
  }
}
