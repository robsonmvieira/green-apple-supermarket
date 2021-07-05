import { Repository, getRepository } from 'typeorm'

import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'
import { NotFoundException } from '@core/exceptions/not-found.exception'
import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'

import { Photo } from './photo-orm.entity'

export class PhotoRepository implements IPhotoRepository {
  repository: Repository<Photo>
  constructor() {
    this.repository = getRepository(Photo)
  }
  async findByProductNameOrThrow(name: string): Promise<Photo> {
    const PhotoOrmExists = await this.repository.findOne({ where: { name } })

    if (!PhotoOrmExists) {
      throw new NotFoundException('Photo not found')
    }
    return PhotoOrmExists
  }
  async findAll(): Promise<Photo[]> {
    return this.repository.find()
  }
  async findOneByIdOrThrow(id: string): Promise<Photo> {
    const PhotoOrmExists = await this.repository.findOne(id)

    if (!PhotoOrmExists) {
      throw new NotFoundException('Photo not found')
    }
    return PhotoOrmExists
  }

  async create(entity: Photo): Promise<Photo> {
    return this.repository.save(entity)
  }

  async remove(id: string): Promise<boolean> {
    const entityExists = await this.repository.findOne(id)

    if (!entityExists) {
      throw new NotFoundException('Entity not found')
    }

    const entityDeleted = await this.repository.delete(entityExists)

    if (!entityDeleted) {
      throw new ArgumentInvalidException('Entity selected cant be deleted')
    }

    return true
  }
  async findPhotoByProduct(productId: string): Promise<Photo[]> {
    return this.repository.find({ where: { productId } })
  }
}
