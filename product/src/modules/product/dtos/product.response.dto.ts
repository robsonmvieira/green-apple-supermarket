import { PhotoResponseDto } from '@modules/photo/dtos/photo.response.dto'

export interface ProductResponseDto {
  id: string
  name: string
  price: string
  promotionalPrice?: string
  images: PhotoResponseDto[]
}
