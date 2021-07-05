import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCategoryByIdUseCase } from './find-category-by-id.usecase'

export class FindCategoryByIdHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindCategoryByIdUseCase)
    const { id } = req.params

    const result = await useCase.execute(id)
    return res.status(201).json(result)
  }
}
