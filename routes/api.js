import { Router } from 'express'
import * as apiCtrl from "../controllers/api.js";

export {
  router
}

const router = Router()

router.get('/ingredients', apiCtrl.ingredientIndex)
router.post('/ingredients', apiCtrl.createIngredient)
router.delete('/ingredients/:id', apiCtrl.deleteIngredient)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}