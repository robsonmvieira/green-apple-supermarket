import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindProductByIdUseCase } from './find-product-by-id.usecase'

export class FindProductByIdHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindProductByIdUseCase)
    const { id } = req.params

    const result = await useCase.execute(id)
    return res.status(201).json(result)
  }
}
