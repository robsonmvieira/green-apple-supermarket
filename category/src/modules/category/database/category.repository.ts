import { getRepository, Repository } from 'typeorm'

import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'
import { ArgumentNotProvidedException } from '@core/exceptions/argument-not-provided.exception'
import { NotFoundException } from '@core/exceptions/not-found.exception'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'

import { CategoryOrmEntity } from './category-orm.entity'

export class CategoryRepository implements ICategoryRepository {
  repository: Repository<CategoryOrmEntity>
  constructor() {
    this.repository = getRepository(CategoryOrmEntity)
  }

  async findAll(): Promise<CategoryOrmEntity[]> {
    return this.repository.find()
  }

  async findByNameOrThrow(name: string): Promise<CategoryOrmEntity> {
    if (!name) {
      throw new ArgumentNotProvidedException('Category name cant be empty')
    }
    const categoryExists = this.repository.findOneOrFail({ where: { name } })

    if (!categoryExists) {
      throw new ArgumentInvalidException('Entity does not exist')
    }

    return categoryExists
  }

  async findOneByIdOrThrow(id: string): Promise<CategoryOrmEntity> {
    const entity = await this.repository.findOne(id)

    if (!entity) {
      throw new NotFoundException('Entity not found')
    }
    return entity
  }

  async create(entity: CategoryOrmEntity): Promise<CategoryOrmEntity> {
    return this.repository.save(entity)
  }

  async update(
    id: string,
    entity: CategoryOrmEntity
  ): Promise<CategoryOrmEntity> {
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
