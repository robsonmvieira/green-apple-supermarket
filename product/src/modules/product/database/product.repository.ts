import { getRepository, Repository } from 'typeorm'

import { ArgumentInvalidException } from '@core/exceptions/argument-invalid.exception'
import { ArgumentNotProvidedException } from '@core/exceptions/argument-not-provided.exception'
import { NotFoundException } from '@core/exceptions/not-found.exception'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'

import { UpdateProductDto } from '../dtos/update-product.dto'
import { Product } from './product-orm.entity'

export class ProductRepository implements IProductRepository {
  repository: Repository<Product>
  constructor() {
    this.repository = getRepository(Product)
  }

  async findAll(): Promise<Product[]> {
    return this.repository.find()
  }

  async findByNameOrThrow(name: string): Promise<Product> {
    if (!name) {
      throw new ArgumentNotProvidedException('Product name cant be empty')
    }
    const productExists = this.repository.findOneOrFail({ where: { name } })

    if (!productExists) {
      throw new ArgumentInvalidException('Entity does not exist')
    }

    return productExists
  }

  async findOneByIdOrThrow(id: string): Promise<Product> {
    const entity = await this.repository.findOne(id)

    if (!entity) {
      throw new NotFoundException('Entity not found')
    }
    return entity
  }

  async create(entity: Product): Promise<Product> {
    console.log(entity)
    return this.repository.save(entity)
  }

  async update(id: string, entity: UpdateProductDto): Promise<Product> {
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

    const entityDeleted = await this.repository.remove(entityExists)

    if (!entityDeleted) {
      throw new ArgumentInvalidException('Entity selected cant be deleted')
    }

    return true
  }
}
