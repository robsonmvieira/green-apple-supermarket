import { Router } from 'express'

import photosRoutes from './photo.routes'
import productsRoutes from './product.routes'

const routes = Router()

routes.use('/photos', photosRoutes)
routes.use('/products', productsRoutes)

export default routes
