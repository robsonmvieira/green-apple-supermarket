export interface CreateProductDto {
  name: string
  description: string
  price: string
  promotionalPrice?: string
  categoryId: string
  images: string[]
}
