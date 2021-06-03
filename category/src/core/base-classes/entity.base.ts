export abstract class Entity {
  id: string
  createdAt: number
  updatedAt: number

  constructor() {
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }
}
