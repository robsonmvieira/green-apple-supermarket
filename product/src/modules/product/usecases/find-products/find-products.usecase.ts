import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
import { ProductOrmEntity } from '@modules/product/database/product-orm.entity'

@injectable()
export class FindProductsUseCase {
  constructor(
    @inject('IProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<ProductOrmEntity[]> {
    return this.productRepository.findAll()
  }
}
