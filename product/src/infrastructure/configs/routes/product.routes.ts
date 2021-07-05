import { Router } from 'express'
import multer from 'multer'

import { CreateProductHttpController } from '@modules/product/usecases/create-product/create-product.http.controller'
import { FindProductByIdHttpController } from '@modules/product/usecases/find-product-by-id/find-product-by-id.http.controller'
import { FindProductByNameHttpController } from '@modules/product/usecases/find-product-by-name/find-product-by-name.http.controller'
import { FindAllProductHttpController } from '@modules/product/usecases/find-products/find-products.http.controller'
import { RemoveProductByIdHttpController } from '@modules/product/usecases/remove-product/remove-product.http.controller'

import uploadMulter from '../utils/upload'

const upload = multer(uploadMulter)

const productRoutes = Router()
const findAllProductsHttpController = new FindAllProductHttpController()
const findProductByNameHttpController = new FindProductByNameHttpController()
const findProductByIdHttpController = new FindProductByIdHttpController()

const createProductHttpController = new CreateProductHttpController()

// const updateCategoryHttpController = new UpdateCategoryHttpController()
const removeProductByIdHttpController = new RemoveProductByIdHttpController()

productRoutes.post(
  '/',
  upload.array('files'),
  createProductHttpController.handle
)
productRoutes.get('/', findAllProductsHttpController.handle)
productRoutes.get('/:id', findProductByIdHttpController.handle)
productRoutes.get('/:name', findProductByNameHttpController.handle)

// productRoutes.put('/:id', updateCategoryHttpController.handle)

productRoutes.delete('/:id', removeProductByIdHttpController.handle)

export default productRoutes
