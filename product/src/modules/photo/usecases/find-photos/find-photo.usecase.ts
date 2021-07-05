import { inject, injectable } from 'tsyringe'

import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'
import { PhotoMapper } from '@modules/photo/database/photo.mapper'
import { PhotoResponseDto } from '@modules/photo/dtos/photo.response.dto'

@injectable()
export class FindphotoUseCase {
  constructor(
    @inject('IPhotoRepository') private repository: IPhotoRepository
  ) {}

  async execute(): Promise<PhotoResponseDto[]> {
    const data = await this.repository.findAll()
    const response = data.map(photo => PhotoMapper.transformToDto(photo))
    return response
  }
}
