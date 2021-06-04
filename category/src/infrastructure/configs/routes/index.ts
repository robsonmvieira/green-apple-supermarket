import { Router } from 'express'

import { CreateCategoryHttpController } from '@modules/category/usecases/create-category/create-category.http.controller'
import { FindAllCategoryHttpController } from '@modules/category/usecases/find-categories/find-category.http.controller'

const routes = Router()
const findCategoriesHttpController = new FindAllCategoryHttpController()
const createCategoryHttpController = new CreateCategoryHttpController()

routes.post('/', createCategoryHttpController.handle)
routes.get('/', findCategoriesHttpController.handle)
// routes.get('/:id', findByIdHttpController.handle)
// routes.put('/:id', authInterceptor, updateUserHttpController.handle)
// routes.delete('/:id', authInterceptor, removeUserHttpController.handle)

export default routes
