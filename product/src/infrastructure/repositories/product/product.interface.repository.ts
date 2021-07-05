// import { IRepositoryBase } from '@core/ports/repository.interface.base'
import { Product } from '@modules/product/database/product-orm.entity'
import { UpdateProductDto } from '@modules/product/dtos/update-product.dto'

export interface IProductRepository {
  findByNameOrThrow(name: string): Promise<Product>
  findAll(): Promise<Product[]>
  findOneByIdOrThrow(id: string): Promise<Product>
  create(entity: Product): Promise<Product>
  update(id: string, entity: UpdateProductDto): Promise<Product>
  remove(id: string): Promise<boolean>
}
