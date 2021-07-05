import { injectable, inject } from 'tsyringe'

import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'
import { Photo } from '@modules/photo/domain/photo.entity'
import { CreatePhotoDto } from '@modules/photo/dtos/create-photo.dto'

@injectable()
export class CreatePhotoUseCase {
  constructor(
    @inject('IPhotoRepository') private repository: IPhotoRepository
  ) {}

  async execute({
    fileName,
    productId,
    product
  }: CreatePhotoDto): Promise<Photo> {
    const newPhoto = new Photo()
    newPhoto.fileName = fileName
    newPhoto.productId = productId
    newPhoto.product = product
    return this.repository.create(newPhoto)
  }
}
