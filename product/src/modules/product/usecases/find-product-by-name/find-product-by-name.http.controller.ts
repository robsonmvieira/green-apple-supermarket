import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindProductByNameUseCase } from './find-product-by-name.usecase'

export class FindProductByNameHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindProductByNameUseCase)
    const { name } = req.params

    const result = await useCase.execute(name)
    return res.status(201).json(result)
  }
}
