import { Router } from 'express'
import CursoController from './app/controllers/CursoController'
import ContatoController from './app/controllers/ContatoController'

const routes = new Router();

routes.get('/', (req, res) => {
    res.json ({ message: "Hellow word" })
})

routes.get('/cursos', CursoController.index)
routes.get('/curso/:id', CursoController.show)
routes.post('/curso', CursoController.store)
routes.put('/curso/:id', CursoController.update)
routes.delete('/curso/:id', CursoController.delete)

routes.get('/contatos', ContatoController.index)
routes.get('/contato/:id', ContatoController.show)
routes.post('/contato', ContatoController.store)
routes.put('/contato/:id', ContatoController.update)
routes.delete('/contato/:id', ContatoController.delete)

export default routes;