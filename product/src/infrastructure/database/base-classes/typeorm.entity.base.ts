import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

export abstract class TypeormEntityBase {
  @PrimaryColumn('uuid')
  id!: string

  @CreateDateColumn({ type: 'timestamptz', update: false })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date

  constructor() {
    this.id = uuidV4()
  }
}
