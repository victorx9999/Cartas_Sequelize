import routerx from 'express-promise-router'
import perfilRouter from './perfilRouter'
import tipoRouter from './tipoRouter'
import cartaRouter from './cartaRouter'

const router = routerx()

// router.get("/", function (req, res) {
//     res.send("Test");
//   });

router.use('/perfil', perfilRouter)
router.use('/tipo', tipoRouter)
router.use('/cartas', cartaRouter)

export { router }