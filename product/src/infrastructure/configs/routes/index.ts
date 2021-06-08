import { Router } from 'express'
import multer from 'multer'

import { CreateProductHttpController } from '@modules/product/usecases/create-product/create-product.http.controller'
import { FindProductByIdHttpController } from '@modules/product/usecases/find-product-by-id/find-product-by-id.http.controller'
import { FindProductByNameHttpController } from '@modules/product/usecases/find-product-by-name/find-product-by-name.http.controller'
import { FindAllProductHttpController } from '@modules/product/usecases/find-products/find-products.http.controller'

const upload = multer({})

const routes = Router()
const findAllProductsHttpController = new FindAllProductHttpController()
const findProductByNameHttpController = new FindProductByNameHttpController()
const findProductByIdHttpController = new FindProductByIdHttpController()

const createProductHttpController = new CreateProductHttpController()

// const updateCategoryHttpController = new UpdateCategoryHttpController()
// const removeCategoryByIdHttpController = new RemoveCategoryHttpController()

routes.post('/', upload.array('files'), createProductHttpController.handle)
routes.get('/', findAllProductsHttpController.handle)
routes.get('/:id', findProductByIdHttpController.handle)
routes.get('/:name', findProductByNameHttpController.handle)
// routes.put('/:id', updateCategoryHttpController.handle)

// routes.delete('/:id', removeCategoryByIdHttpController.handle)

export default routes
