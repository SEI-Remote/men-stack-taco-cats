import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'

export {
  router
}

const router = Router()

router.get('/', tacosCtrl.index)
router.post('/', tacosCtrl.create)
