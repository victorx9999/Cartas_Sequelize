import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { router } from './routes'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', router)
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('O servidor está escutando na porta ' + app.get('port') + '.')
   
})