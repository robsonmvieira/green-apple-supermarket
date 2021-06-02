import { config } from 'dotenv'
import express from 'express'
import httpProxy from 'express-http-proxy'
import { readFileSync } from 'fs'
import { load } from 'js-yaml'
import morgan from 'morgan'
import { resolve } from 'path'

config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))

type Service = {
  name: string
  url: string
}

const pathFile = resolve(process.cwd(), 'config.yml')

const readConfig = readFileSync(pathFile, { encoding: 'utf8' })

const { services } = load(readConfig, { json: true })

console.log(services)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ok' })
})

services.forEach(({ name, url }: Service) => {
  console.log(name, url)
  app.use(`/${name}`, httpProxy(url, { timeout: 5000 }))
})

const port = process.env.PORT

app.listen(port, () =>
  console.log('Gateway running on Port http://localhost:8000')
)
