import { Router } from 'express'
import CursoController from './app/controllers/CusoControler'

const routes = new Router();

routes.get('/', (req, res) => {
    res.json ({ message: "Hellow word" })
})

routes.get('/cursos', CursoController.index)
routes.get('/cursos/:id', CursoController.show)
routes.post('/cursos', CursoController.store)
routes.put('/cursos/:id', CursoController.update)
routes.get('/cursos/:id', CursoController.delete)

export default routes;