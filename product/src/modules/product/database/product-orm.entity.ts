/* eslint-disable import/no-unresolved */
import { Column, Entity } from 'typeorm'

import { TypeormEntityBase } from '@infrastructure/database/base-classes/typeorm.entity.base'

@Entity('products')
export class ProductOrmEntity extends TypeormEntityBase {
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

  @Column()
  images: string[]
}
