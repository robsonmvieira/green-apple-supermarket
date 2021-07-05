import AWS from 'aws-sdk'
import fs from 'fs'
import mime from 'mime'
import { resolve } from 'path'

import uplodad from '../../../infrastructure/configs/utils/upload'
import { StorageProvider } from '../storage.provider'

export class S3StorageProvider implements StorageProvider {
  private client: AWS.S3

  constructor() {
    AWS.config.update({
      secretAccessKey: `${process.env.AWS_ACCESS_KEY}`,
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`
    })
    this.client = new AWS.S3({
      region: process.env.AWS_REGION
    })
  }

  async save(filename: string, folder: string): Promise<string> {
    const originalname = resolve(uplodad.tmpFolder, filename)

    const fileContent = await fs.promises.readFile(originalname)

    const ContentType = mime.getType(originalname)

    await this.client
      .putObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: filename,
        ACL: 'public-read',
        Body: fileContent,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ContentType: ContentType!
      })
      .promise()
    await fs.promises.unlink(originalname)

    return filename
  }

  async delete(filename: string, folder: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: filename
      })
      .promise()
  }
}
