import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.post('/:id/cats', isLoggedIn, profilesCtrl.createCat)
router.delete('/cats/:id', isLoggedIn, profilesCtrl.deleteCat)