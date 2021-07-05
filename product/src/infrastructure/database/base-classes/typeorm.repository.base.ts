import { getRepository, ObjectType, Repository } from 'typeorm'

import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'
import { NotFoundException } from '@core/exceptions/not-found.exception'
import { IRepositoryBase } from '@core/ports/repository.interface.base'

export abstract class TypeormRepositoryBase<T> implements IRepositoryBase<T> {
  repository: Repository<T>
  entity: ObjectType<T>

  constructor(entity: ObjectType<T>) {
    this.repository = getRepository(this.entity)
    this.entity = entity
  }

  async findAll(): Promise<T[]> {
    return this.repository.find()
  }

  async findOneByIdOrThrow(id: string): Promise<T> {
    const entity = await this.repository.findOne(id)

    if (!entity) {
      throw new NotFoundException('Entity not found')
    }
    return entity
  }

  async create(entity: T): Promise<T> {
    return this.repository.save(entity)
  }

  async update(id: string, entity: T): Promise<T> {
    const entityExists = await this.repository.findOne(id)

    if (!entityExists) {
      throw new NotFoundException('Entity not found')
    }

    const updatedEntity = Object.assign(entityExists, entity)
    await this.repository.update(id, entity)
    return updatedEntity
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
}
