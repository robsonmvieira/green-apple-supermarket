import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateProductDto } from '@modules/product/dtos/create-product.dto'

import { CreateProductUseCase } from './create-product.usecase'

export class CreateProductHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateProductUseCase)
    const { name, description, price, promotionalPrice, categoryId, images } =
      req.body as CreateProductDto

    const result = await useCase.execute({
      name,
      description,
      price,
      promotionalPrice,
      categoryId,
      images
    })
    return res.status(201).json(result)
  }
}
