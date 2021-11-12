"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CursoController = require('./app/controllers/CursoController'); var _CursoController2 = _interopRequireDefault(_CursoController);
var _ContatoController = require('./app/controllers/ContatoController'); var _ContatoController2 = _interopRequireDefault(_ContatoController);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);

var _swaggerjson = require('../swagger.json'); var _swaggerjson2 = _interopRequireDefault(_swaggerjson);



const routes = new (0, _express.Router)();

routes.use('/swagger', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swaggerjson2.default))

routes.get('/', (req, res) => {
    res.json ({ message: "Hellow word" })
})

routes.get('/cursos', _CursoController2.default.index)
routes.get('/cursos/:id', _CursoController2.default.show)
routes.post('/cursos', _CursoController2.default.store)
routes.put('/cursos/:id', _CursoController2.default.update)
routes.delete('/cursos/:id', _CursoController2.default.delete)

routes.get('/contatos', _ContatoController2.default.index)
routes.get('/contatos/:id', _ContatoController2.default.show)
routes.post('/contatos', _ContatoController2.default.store)
routes.put('/contatos/:id', _ContatoController2.default.update)
routes.delete('/contatos/:id', _ContatoController2.default.delete)

exports. default = routes;