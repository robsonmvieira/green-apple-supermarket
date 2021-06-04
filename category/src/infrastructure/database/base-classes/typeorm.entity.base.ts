import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm'

export abstract class TypeormEntityBase {
  @PrimaryColumn('uuid')
  id!: string

  @CreateDateColumn({ type: 'timestamptz', update: false })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date
}
