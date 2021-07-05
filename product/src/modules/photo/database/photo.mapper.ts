import { classToClass } from 'class-transformer'

import { PhotoResponseDto } from '../dtos/photo.response.dto'
import { Photo } from './photo-orm.entity'

export class PhotoMapper {
  static transformToDto({ fileName, image_url }: Photo): PhotoResponseDto {
    const photo = classToClass({
      fileName,
      image_url
    })

    return photo
  }
}
