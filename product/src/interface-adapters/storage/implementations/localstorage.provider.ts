import fs from 'fs'
import { resolve } from 'path'

import uplodad from '../../../infrastructure/configs/utils/upload'
import { StorageProvider } from '../storage.provider'

export class LocalStorageProvider implements StorageProvider {
  async save(filename: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(uplodad.tmpFolder, filename),
      resolve(`${uplodad.tmpFolder}/${folder}`, filename)
    )
    return filename
  }

  async delete(filename: string, folder: string): Promise<void> {
    const file = resolve(`${uplodad.tmpFolder}/${folder}`, filename)

    try {
      await fs.promises.stat(file)
    } catch {
      return
    }
    await fs.promises.unlink(file)
  }
}
