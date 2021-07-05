import { ProductOrmEntity } from '@modules/product/database/product-orm.entity'

export class CreatePhotoDto {
  productId: string
  fileName: string
  product: ProductOrmEntity
}
