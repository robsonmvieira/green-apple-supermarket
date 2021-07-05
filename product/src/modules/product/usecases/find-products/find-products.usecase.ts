import { inject, injectable } from 'tsyringe'

import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
import { PhotoMapper } from '@modules/photo/database/photo.mapper'
import { ProductResponseDto } from '@modules/product/dtos/product.response.dto'

@injectable()
export class FindProductsUseCase {
  constructor(
    @inject('IProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<ProductResponseDto[]> {
    const tmp = await this.productRepository.findAll()
    const res = tmp.map(el => ({
      ...el,
      images: el.images.map(photo => PhotoMapper.transformToDto(photo))
    }))

    return res
  }
}
