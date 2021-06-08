import { container } from 'tsyringe'

// import { IOnCategoryDeletedDomainEventHandler } from '@core/domain-events/domain-event-category-deleted-handler.interface'
// import { IOnCategoryUpdatedDomainEventHandler } from '@core/domain-events/domain-event-category-updated-handler.interface'
// import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
// import { OnCategoryCreatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-created.event-handler'
// import { OnCategoryDeletedDomainEventHandler } from '@modules/category/domain-event-handlers/category-deleted.event-handler'
// import { OnCategoryUpdatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-updated.event-handler'
import { ProductRepository } from '@modules/product/database/product.repository'

container.registerSingleton<IProductRepository>(
  'IProductRepository',
  ProductRepository
)

// container.registerSingleton<IOnCategoryCreatedDomainEventHandler>(
//   'IOnCategoryCreatedDomainEventHandler',
//   OnCategoryCreatedDomainEventHandler
// )

// container.registerSingleton<IOnCategoryDeletedDomainEventHandler>(
//   'IOnCategoryDeletedDomainEventHandler',
//   OnCategoryDeletedDomainEventHandler
// )

// container.registerSingleton<IOnCategoryUpdatedDomainEventHandler>(
//   'IOnCategoryUpdatedDomainEventHandler',
//   OnCategoryUpdatedDomainEventHandler
// )
