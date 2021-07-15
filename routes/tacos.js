import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.get('/:id/edit', isLoggedIn, tacosCtrl.edit)
router.post('/', isLoggedIn, tacosCtrl.create)
router.put('/:id', isLoggedIn, tacosCtrl.update)
router.put('/:id/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)
router.delete('/:id', isLoggedIn, tacosCtrl.delete)
router.post('/:id/ingredients', isLoggedIn, tacosCtrl.addIngredient)
router.delete('/:id/ingredients', isLoggedIn, tacosCtrl.removeIngredient)