/* eslint-disable no-restricted-syntax */
import { inject, injectable } from 'tsyringe'

import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'

import { StorageProvider } from '../../../../interface-adapters/storage/storage.provider'

@injectable()
export class RemoveProductUseCase {
  constructor(
    @inject('IPhotoRepository')
    private photoRepository: IPhotoRepository,
    @inject('IProductRepository')
    private repository: IProductRepository,
    @inject('StorageProvider') private storageProvider: StorageProvider
  ) {}

  async execute(productId: string): Promise<boolean> {
    const product = await this.repository.findOneByIdOrThrow(productId)
    for await (const image of product.images) {
      await this.storageProvider.delete(image.fileName, 'products')
    }
    return this.repository.remove(productId)
  }
}
