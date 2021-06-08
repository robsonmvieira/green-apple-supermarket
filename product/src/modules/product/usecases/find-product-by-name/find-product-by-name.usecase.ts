import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
import { ProductOrmEntity } from '@modules/product/database/product-orm.entity'

@injectable()
export class FindProductByNameUseCase {
  constructor(
    @inject('IProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(productName: string): Promise<ProductOrmEntity> {
    return this.productRepository.findByNameOrThrow(productName)
  }
}
