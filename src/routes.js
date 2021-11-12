import { Router } from 'express';
import CursoController from './app/controllers/CursoController';
import ContatoController from './app/controllers/ContatoController';
import swaggerUI from 'swagger-ui-express';

import swaggerDocument from '../swagger.json';



const routes = new Router();

routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

routes.get('/', (req, res) => {
    res.json ({ message: "Hellow word" })
})

routes.get('/cursos', CursoController.index)
routes.get('/cursos/:id', CursoController.show)
routes.post('/cursos', CursoController.store)
routes.put('/cursos/:id', CursoController.update)
routes.delete('/cursos/:id', CursoController.delete)

routes.get('/contatos', ContatoController.index)
routes.get('/contatos/:id', ContatoController.show)
routes.post('/contatos', ContatoController.store)
routes.put('/contatos/:id', ContatoController.update)
routes.delete('/contatos/:id', ContatoController.delete)

export default routes;