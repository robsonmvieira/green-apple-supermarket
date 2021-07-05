import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindphotoUseCase } from './find-photo.usecase'

export class FindAllPhotosHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(FindphotoUseCase)

    const result = await useCase.execute()
    return res.status(200).json(result)
  }
}
