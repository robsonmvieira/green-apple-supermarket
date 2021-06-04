/* eslint-disable import/no-unresolved */
import { Column, Entity } from 'typeorm'

import { TypeormEntityBase } from '@infrastructure/database/base-classes/typeorm.entity.base'

@Entity('categories')
export class CategoryOrmEntity extends TypeormEntityBase {
  @Column({ unique: true })
  name: string
}
