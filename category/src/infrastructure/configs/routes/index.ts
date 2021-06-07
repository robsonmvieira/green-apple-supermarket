import { Router } from 'express'

import { CreateCategoryHttpController } from '@modules/category/usecases/create-category/create-category.http.controller'
import { FindAllCategoryHttpController } from '@modules/category/usecases/find-categories/find-category.http.controller'
import { FindCategoryByIdHttpController } from '@modules/category/usecases/find-category-by-id/find-category-by-id.http.controller'
import { FindCategoryByNameHttpController } from '@modules/category/usecases/find-category-by-name/find-category-by-name.http.controller'
import { RemoveCategoryHttpController } from '@modules/category/usecases/remove-category/remove-category.http.controller'
import { UpdateCategoryHttpController } from '@modules/category/usecases/update-category/update-category.http.controller'

const routes = Router()
const findCategoriesHttpController = new FindAllCategoryHttpController()
const findCategoryByNameHttpController = new FindCategoryByNameHttpController()
const findCategoryByIdHttpController = new FindCategoryByIdHttpController()

const createCategoryHttpController = new CreateCategoryHttpController()

const updateCategoryHttpController = new UpdateCategoryHttpController()
const removeCategoryByIdHttpController = new RemoveCategoryHttpController()

routes.post('/', createCategoryHttpController.handle)
routes.get('/', findCategoriesHttpController.handle)
routes.get('/:id', findCategoryByIdHttpController.handle)
routes.get('/:name', findCategoryByNameHttpController.handle)
routes.put('/:id', updateCategoryHttpController.handle)
// routes.delete('/:id', authInterceptor, removeCategoryByIdHttpController.handle)
routes.delete('/:id', removeCategoryByIdHttpController.handle)

export default routes
