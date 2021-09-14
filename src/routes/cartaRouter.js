import routerx from 'express-promise-router'
import cartaController from '../controllers/cartaController'

const router = routerx()

router.get('/', cartaController.list)
router.get('/:id', cartaController.findByID)
router.put('/:id', cartaController.update)
router.post('/', cartaController.add)


export default router