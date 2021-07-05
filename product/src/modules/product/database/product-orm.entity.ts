/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { Column, Entity, JoinTable, OneToMany } from 'typeorm'

import { TypeormEntityBase } from '@infrastructure/database/base-classes/typeorm.entity.base'
import { Photo } from '@modules/photo/database/photo-orm.entity'

@Entity('products')
export class Product extends TypeormEntityBase {
  @Column({ unique: true })
  name: string

  @Column()
  price: string

  @Column()
  description: string

  @Column({ nullable: true })
  promotionalPrice?: string

  @Column()
  categoryId: string

  @OneToMany(() => Photo, photos => photos.product, { eager: true, onDelete: "CASCADE" })
  @JoinTable()
  images: Photo[]

  

  constructor(
    name: string,
    price: string,
    description: string,
    category_id: string,
    images: Photo[],
    promotionalPrice?: string
  ) {
    super()
    this.name = name
    this.price = price
    this.description = description
    this.categoryId = category_id
    this.promotionalPrice = promotionalPrice || undefined
    this.images = images
  }
}
