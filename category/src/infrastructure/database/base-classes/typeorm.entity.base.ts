import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export abstract class TypeormEntityBase {
  constructor(props?: unknown) {
    if (props) {
      Object.assign(this, props)
    }
  }

  @PrimaryColumn({ update: false })
  id!: string

  @CreateDateColumn({ type: 'time with time zone', update: false })
  createdAt!: Date

  @UpdateDateColumn({ type: 'time with time zone' })
  updatedAt!: Date
}
