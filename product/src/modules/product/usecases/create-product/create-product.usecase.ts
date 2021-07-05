/* eslint-disable no-restricted-syntax */
import { StorageProvider } from 'interface-adapters/storage/storage.provider'
import { inject, injectable } from 'tsyringe'

import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
import { Photo } from '@modules/photo/database/photo-orm.entity'
import { Product } from '@modules/product/database/product-orm.entity'
import { CreateProductDto } from '@modules/product/dtos/create-product.dto'

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('StorageProvider') private storageProvider: StorageProvider,
    @inject('IPhotoRepository') private photoRepository: IPhotoRepository,
    @inject('IProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute({
    name,
    description,
    price,
    promotionalPrice,
    categoryId,
    images
  }: CreateProductDto): Promise<Product> {
    const productPhotos: Photo[] = []

    for await (const image of images) {
      const newImage = new Photo(image)
      await this.storageProvider.save(newImage.fileName, 'products')
      await this.photoRepository.create(newImage)
      productPhotos.push(newImage)
    }
    const newProduct = new Product(
      name,
      price,
      description,
      categoryId,
      productPhotos,
      promotionalPrice || undefined
    )

    this.productRepository.create(newProduct)

    return newProduct
  }
}
