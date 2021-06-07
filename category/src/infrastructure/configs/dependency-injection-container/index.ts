import { container } from 'tsyringe'

import { IOnCategoryDeletedDomainEventHandler } from '@core/domain-events/domain-event-category-deleted-handler.interface'
import { IOnCategoryUpdatedDomainEventHandler } from '@core/domain-events/domain-event-category-updated-handler.interface'
import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryRepository } from '@modules/category/database/category.repository'
import { OnCategoryCreatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-created.event-handler'
import { OnCategoryDeletedDomainEventHandler } from '@modules/category/domain-event-handlers/category-deleted.event-handler'
import { OnCategoryUpdatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-updated.event-handler'

container.registerSingleton<ICategoryRepository>(
  'ICategoryRepository',
  CategoryRepository
)

container.registerSingleton<IOnCategoryCreatedDomainEventHandler>(
  'IOnCategoryCreatedDomainEventHandler',
  OnCategoryCreatedDomainEventHandler
)

container.registerSingleton<IOnCategoryDeletedDomainEventHandler>(
  'IOnCategoryDeletedDomainEventHandler',
  OnCategoryDeletedDomainEventHandler
)

container.registerSingleton<IOnCategoryUpdatedDomainEventHandler>(
  'IOnCategoryUpdatedDomainEventHandler',
  OnCategoryUpdatedDomainEventHandler
)
