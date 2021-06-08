import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
import { ProductOrmEntity } from '@modules/product/database/product-orm.entity'
import { ProductEntity } from '@modules/product/domain/entities/product.entity'
import { CreateProductDto } from '@modules/product/dtos/create-product.dto'
import { ProductResponse } from '@modules/product/dtos/product.response.dto'

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('IProductRepository')
    private productRepository: IProductRepository // @inject('IOnCategoryCreatedDomainEventHandler') // private domainHandler: IOnCategoryCreatedDomainEventHandler
  ) {}

  async execute({
    name,
    description,
    price,
    promotionalPrice,
    categoryId,
    images
  }: CreateProductDto): Promise<ProductResponse> {
    const newProduct = new ProductEntity({
      name,
      description,
      price,
      promotionalPrice,
      categoryId,
      images
    }).toObject() as ProductEntity
    const productOrm = Object.assign(newProduct, new ProductOrmEntity())
    await this.productRepository.create(productOrm)

    return new ProductResponse(newProduct)
  }
}
