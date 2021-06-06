import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateCategoryDto } from '@modules/category/dtos/update-category.dto'

import { UpdateCategoryUseCase } from './update-category.usecase'

export class UpdateCategorydHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(UpdateCategoryUseCase)
    const { id } = req.params
    const { name } = req.body as UpdateCategoryDto

    const result = await useCase.execute(id, { name })
    return res.status(201).json(result)
  }
}
