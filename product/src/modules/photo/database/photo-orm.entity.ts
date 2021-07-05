/* eslint-disable prettier/prettier */
import { Expose } from 'class-transformer'
import { Column, Entity, ManyToOne } from 'typeorm'

import { TypeormEntityBase } from '@infrastructure/database/base-classes/typeorm.entity.base'
import { Product } from '@modules/product/database/product-orm.entity'

@Entity({ name: 'photos' })
export class Photo extends TypeormEntityBase {


  @Column()
  fileName: string

  @ManyToOne(() => Product, product => product.images, {onDelete: "CASCADE"})
  product: Product

  @Expose({name: 'image_url'})
  image_url(): string {
    switch (process.env.disk) {
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/products/${this.fileName}`
      
      case "local":
        return `${process.env.APP_API_URL}/products/${this.fileName}`
    
      default:
        return 'not found';
    }
  }

  constructor(fileName: string) {
    super()
    this.fileName = fileName
  }
}
