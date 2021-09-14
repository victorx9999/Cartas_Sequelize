import routerx from 'express-promise-router'
import perfilController from '../controllers/perfilController'

const router = routerx()

// router.get('/', perfilController.list)
router.get('/:id', perfilController.findByID)
router.get('/', perfilController.listIDOne)
router.get('/findByName/:descricao',perfilController.findByName)
router.put('/:id', perfilController.update)
router.post('/', perfilController.add)


export default router