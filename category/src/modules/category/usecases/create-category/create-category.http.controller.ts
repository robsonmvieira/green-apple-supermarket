import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryDto } from '@modules/category/dtos/create-category.dto'

import { CreateCategoryUseCase } from './create-category.usecase'

export class CreateCategoryHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateCategoryUseCase)
    const { name } = req.body as CreateCategoryDto

    const result = await useCase.execute({ name })
    return res.status(201).json(result)
  }
}
