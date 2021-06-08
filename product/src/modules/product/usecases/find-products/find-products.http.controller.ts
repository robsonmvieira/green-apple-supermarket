import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindProductsUseCase } from './find-products.usecase'

export class FindAllProductHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindProductsUseCase)
    const products = await useCase.execute()

    return res.status(200).json(products)
  }
}
