// import { IRepositoryBase } from '@core/ports/repository.interface.base'
import { CategoryOrmEntity } from '@modules/category/database/category-orm.entity'

export interface ICategoryRepository {
  findByNameOrThrow(name: string): Promise<CategoryOrmEntity>
  findAll(): Promise<CategoryOrmEntity[]>
  findOneByIdOrThrow(id: string): Promise<CategoryOrmEntity>
  create(entity: CategoryOrmEntity): Promise<CategoryOrmEntity>
  update(id: string, entity: CategoryOrmEntity): Promise<CategoryOrmEntity>
  remove(id: string): Promise<boolean>
}
