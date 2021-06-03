export interface IRepositoryBase<T> {
  findAll(): Promise<T[]>
  findOneByIdOrThrow(id: string): Promise<T>
  create(entity: T): Promise<T>
  update(id: string, entity: T): Promise<T>
  remove(id: string): Promise<boolean>
}
