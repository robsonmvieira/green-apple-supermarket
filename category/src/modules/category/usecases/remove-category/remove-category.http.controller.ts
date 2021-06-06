import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { RemoveCategoryUseCase } from './remove-category.usecase'

export class RemoveCategoryHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(RemoveCategoryUseCase)
    const { id } = req.params

    const result = await useCase.execute(id)
    return res.status(201).json(result)
  }
}
