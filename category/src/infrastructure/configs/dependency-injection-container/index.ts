import { container } from 'tsyringe'

import { ICategoryRepository } from '@infrastructure/repositories/category/category.interface.repository'
import { CategoryRepository } from '@modules/category/database/category.repository'

container.registerSingleton<ICategoryRepository>(
  'ICategoryRepository',
  CategoryRepository
)
