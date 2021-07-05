import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCategoryByNameUseCase } from './find-category-by-name.usecase'

export class FindCategoryByNameHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindCategoryByNameUseCase)
    const { name } = req.params

    const result = await useCase.execute(name)
    return res.status(201).json(result)
  }
}
