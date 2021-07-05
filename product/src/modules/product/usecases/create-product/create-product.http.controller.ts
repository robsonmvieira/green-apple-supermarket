import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateProductDto } from '@modules/product/dtos/create-product.dto'

import { CreateProductUseCase } from './create-product.usecase'

interface PhotoProps {
  filename: string
}

export class CreateProductHttpController {
  async handle(request: Request, res: Response): Promise<Response> {
    const files = request.files as PhotoProps[]
    const fileNames = files.map(el => el.filename)
    const useCase = container.resolve(CreateProductUseCase)
    const { name, description, price, promotionalPrice, categoryId } =
      request.body as CreateProductDto

    const result = await useCase.execute({
      name,
      description,
      price,
      promotionalPrice,
      categoryId,
      images: fileNames
    })

    return res.status(201).json(result)
  }
}
