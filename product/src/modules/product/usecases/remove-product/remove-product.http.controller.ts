import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { RemoveProductUseCase } from './remove-product.usecase'

export class RemoveProductByIdHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(RemoveProductUseCase)
    const { id } = req.params

    const result = await useCase.execute(id)
    return res.status(201).json(result)
  }
}
