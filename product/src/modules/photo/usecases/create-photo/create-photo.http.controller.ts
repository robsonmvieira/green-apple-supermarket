import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreatePhotoDto } from '@modules/photo/dtos/create-photo.dto'

import { CreatePhotoUseCase } from './create-photo.usecase'

export class CreatePhotosHttpController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreatePhotoUseCase)
    const { fileName, productId, product } = req.body as CreatePhotoDto
    const { file } = req
    console.log(req.body)
    console.log({ fileName: file.filename, productId, product })
    // const result = await useCase.execute({ fileName, productId, product })

    return res.status(201).json({ message: 'ok' })
  }
}
