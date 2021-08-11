import { Router } from 'express'
const routes = new Router();

import UserController from './app/controllers/UserControler'

routes.get('/', (req, res) => {
    res.json ({ message: "Hellow word" })
})

routes.post('/users', UserController.store)

export default routes;