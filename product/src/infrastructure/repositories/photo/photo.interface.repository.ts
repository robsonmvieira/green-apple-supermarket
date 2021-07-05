// import { IRepositoryBase } from '@core/ports/repository.interface.base'
import { Photo } from '@modules/photo/database/photo-orm.entity'
// import { Photo } from '@modules/photo/domain/photo.entity'

export interface IPhotoRepository {
  findByProductNameOrThrow(name: string): Promise<Photo>
  findAll(): Promise<Photo[]>
  findOneByIdOrThrow(id: string): Promise<Photo>
  create(entity: Photo): Promise<Photo>
  // update(id: string, entity: UpdateProductDto): Promise<Photo>
  remove(id: string): Promise<boolean>
  findPhotoByProduct(productId: string): Promise<Photo[]>
}
