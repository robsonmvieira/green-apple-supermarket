import { container } from 'tsyringe'

import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryRepository } from '@modules/category/database/category.repository'
import { OnCategoryCreatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-created.event-handler'

container.registerSingleton<ICategoryRepository>(
  'ICategoryRepository',
  CategoryRepository
)

container.registerSingleton<IOnCategoryCreatedDomainEventHandler>(
  'IOnCategoryCreatedDomainEventHandler',
  OnCategoryCreatedDomainEventHandler
)
