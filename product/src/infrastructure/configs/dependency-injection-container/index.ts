// import { LocalStorageProvider } from 'interface-adapters/storage/implementations/localstorage.provider'
// import { LocalStorageProvider } from 'interface-adapters/storage/implementations/localstorage.provider'
import { StorageProvider } from 'interface-adapters/storage/storage.provider'
import { container } from 'tsyringe'

// import { IOnCategoryDeletedDomainEventHandler } from '@core/domain-events/domain-event-category-deleted-handler.interface'
// import { IOnCategoryUpdatedDomainEventHandler } from '@core/domain-events/domain-event-category-updated-handler.interface'
// import { IOnCategoryCreatedDomainEventHandler } from '@core/domain-events/domain-event-handler.interface'
import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { IPhotoRepository } from '@infrastructure/repositories/photo/photo.interface.repository'
import { IProductRepository } from '@infrastructure/repositories/product/product.interface.repository'
// import { OnCategoryCreatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-created.event-handler'
// import { OnCategoryDeletedDomainEventHandler } from '@modules/category/domain-event-handlers/category-deleted.event-handler'
// import { OnCategoryUpdatedDomainEventHandler } from '@modules/category/domain-event-handlers/category-updated.event-handler'
import { CategoryRepository } from '@modules/category/database/category.repository'
import { PhotoRepository } from '@modules/photo/database/photo.repository'
import { ProductRepository } from '@modules/product/database/product.repository'

import { S3StorageProvider } from '../../../interface-adapters/storage/implementations/s3-storage.provider'

container.registerSingleton<IProductRepository>(
  'IProductRepository',
  ProductRepository
)

container.registerSingleton<ICategoryRepository>(
  'ICategoryRepository',
  CategoryRepository
)

container.registerSingleton<IPhotoRepository>(
  'IPhotoRepository',
  PhotoRepository
)

// const diskStorage = {
//   local: LocalStorageProvider,
//   s3: S3StorageProvider
// }

container.registerSingleton<StorageProvider>(
  'StorageProvider',
  S3StorageProvider
)

// container.registerSingleton<TypeormRepositoryBase<T>>(
//   'IBaseRepository',
//   IRepositoryBase<T>
// )

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
