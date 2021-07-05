import { Router } from 'express'
import multer from 'multer'

import { CreatePhotosHttpController } from '@modules/photo/usecases/create-photo/create-photo.http.controller'
import { FindAllPhotosHttpController } from '@modules/photo/usecases/find-photos/find-photo.http.controller'

// import { CreateProductHttpController } from '@modules/product/usecases/create-product/create-product.http.controller'
// import { FindProductByIdHttpController } from '@modules/product/usecases/find-product-by-id/find-product-by-id.http.controller'
// import { FindProductByNameHttpController } from '@modules/product/usecases/find-product-by-name/find-product-by-name.http.controller'
// import { FindAllProductHttpController } from '@modules/product/usecases/find-products/find-products.http.controller'

import uploadMulter from '../utils/upload'

const upload = multer(uploadMulter)

const photosRoutes = Router()

const findAllPhotosHttpController = new FindAllPhotosHttpController()
const createPhotosHttpController = new CreatePhotosHttpController()

photosRoutes.get('/', findAllPhotosHttpController.handle)
photosRoutes.post('/', upload.single('file'), createPhotosHttpController.handle)
// const findProductByNameHttpController = new FindProductByNameHttpController()
// const findProductByIdHttpController = new FindProductByIdHttpController()

// const createProductHttpController = new CreateProductHttpController()

// const updateCategoryHttpController = new UpdateCategoryHttpController()
// const removeCategoryByIdHttpController = new RemoveCategoryHttpController()

// photosRoutes.get('/:id', findProductByIdHttpController.handle)
// photosRoutes.get('/:name', findProductByNameHttpController.handle)

// photosRoutes.put('/:id', updateCategoryHttpController.handle)

// photosRoutes.delete('/:id', removeCategoryByIdHttpController.handle)

export default photosRoutes
