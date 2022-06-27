import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

// GET  localhost:3000/api/ingredients
router.get('/ingredients', apiCtrl.index)

// POST localhost:3000/api/ingredients
router.post('/ingredients', apiCtrl.create)

// DELETE localhost:3000/api/ingredients/:id
router.delete('/ingredients/:id', apiCtrl.delete)

export {
  router
}
