import { config } from 'dotenv'
import '@infrastructure/database'
import express from 'express'
import morgan from 'morgan'

import 'express-async-errors'
import 'reflect-metadata'
import routes from '@infrastructure/configs/routes'
import errorInterceptor from '@infrastructure/interceptors/error.interceptor'

// import './consumer'
import '@infrastructure/configs/dependency-injection-container'

config()
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/', routes)

const port = process.env.PORT

app.use(errorInterceptor)

app.listen(port, () =>
  console.log('category api running on http://localhost:8002')
)
