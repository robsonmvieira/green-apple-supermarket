import { IRepositoryBase } from '@core/ports/repository.interface.base'
import { CategoryEntity } from '@modules/category/domain/entities/category.entity'

export interface ICategoryRepository extends IRepositoryBase<CategoryEntity> {
  findByNameOrThrow(name: string): Promise<CategoryEntity>
}
