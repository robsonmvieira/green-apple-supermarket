import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCategoryUseCase } from './find-categories.usecase'

export class FindAllCategoryHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindCategoryUseCase)
    const categories = await useCase.execute()

    return res.status(200).json(categories)
  }
}
