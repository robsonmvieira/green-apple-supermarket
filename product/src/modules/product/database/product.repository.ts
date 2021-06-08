import { getRepository, Repository } from 'typeorm'

import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'
import { ArgumentNotProvidedException } from '@core/exceptions/argument-not-provided.exception'
import { NotFoundException } from '@core/exceptions/not-found.exception'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'

import { UpdateProductDto } from '../dtos/update-product.dto'
import { ProductOrmEntity } from './product-orm.entity'

export class ProductRepository implements IProductRepository {
  repository: Repository<ProductOrmEntity>
  constructor() {
    this.repository = getRepository(ProductOrmEntity)
  }

  async findAll(): Promise<ProductOrmEntity[]> {
    return this.repository.find()
  }

  async findByNameOrThrow(name: string): Promise<ProductOrmEntity> {
    if (!name) {
      throw new ArgumentNotProvidedException('Product name cant be empty')
    }
    const productExists = this.repository.findOneOrFail({ where: { name } })

    if (!productExists) {
      throw new ArgumentInvalidException('Entity does not exist')
    }

    return productExists
  }

  async findOneByIdOrThrow(id: string): Promise<ProductOrmEntity> {
    const entity = await this.repository.findOne(id)

    if (!entity) {
      throw new NotFoundException('Entity not found')
    }
    return entity
  }

  async create(entity: ProductOrmEntity): Promise<ProductOrmEntity> {
    return this.repository.save(entity)
  }

  async update(
    id: string,
    entity: UpdateProductDto
  ): Promise<ProductOrmEntity> {
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
