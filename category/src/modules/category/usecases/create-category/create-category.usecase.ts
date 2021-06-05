import { inject, injectable } from 'tsyringe'

import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'
import { CategoryEntity } from '@modules/category/domain/entities/category.entity'
import { CategoryCreatedDomainEvent } from '@modules/category/domain/events/category-created.domain-event'
import { CreateCategoryDto } from '@modules/category/dtos/create-category.dto'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('ICategoryRepository')
    private categoryRepository: ICategoryRepository,
    @inject('IOnCategoryCreatedDomainEventHandler')
    private domainHandler: IOnCategoryCreatedDomainEventHandler
  ) {}

  async execute({ name }: CreateCategoryDto): Promise<CategoryOrmEntity> {
    const newCategory = new CategoryEntity({ name }).toObject()
    const categoryOrm = Object.assign(newCategory, new CategoryOrmEntity())
    const result = await this.categoryRepository.create(categoryOrm)
    const categoryEvent = new CategoryCreatedDomainEvent({
      id: result.id,
      name: result.name
    })
    this.domainHandler.onCategoryCreated(categoryEvent)

    return result
  }
}
