// import { IRepositoryBase } from '@core/ports/repository.interface.base'
import { ProductOrmEntity } from '@modules/product/database/product-orm.entity'
import { UpdateProductDto } from '@modules/product/dtos/update-product.dto'

export interface IProductRepository {
  findByNameOrThrow(name: string): Promise<ProductOrmEntity>
  findAll(): Promise<ProductOrmEntity[]>
  findOneByIdOrThrow(id: string): Promise<ProductOrmEntity>
  create(entity: ProductOrmEntity): Promise<ProductOrmEntity>
  update(id: string, entity: UpdateProductDto): Promise<ProductOrmEntity>
  remove(id: string): Promise<boolean>
}
