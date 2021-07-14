import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'

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
router.post('/:id/ingredients', tacosCtrl.addIngredient)
router.delete('/:id/ingredients', tacosCtrl.removeIngredient)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}