import routerx from 'express-promise-router'
import tipoController from '../controllers/tipoController'

const router = routerx()

router.get('/', tipoController.list)
router.get('/:id', tipoController.findByID)
router.put('/:id', tipoController.update)
router.post('/', tipoController.add)


export default router