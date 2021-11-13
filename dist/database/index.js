"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Curso = require('../app/models/Curso'); var _Curso2 = _interopRequireDefault(_Curso);
var _Contato = require('../app/models/Contato'); var _Contato2 = _interopRequireDefault(_Contato);

const models = [_Curso2.default, _Contato2.default];

class Database {
    constructor(){
        this.init();
    }    

    init(){
        this.connection = new (0, _sequelize2.default)(_database2.default);

        models
        .map (model => model.init(this.connection))
        .map( model => model.associate && model.associate(this.connection.models))
    }
}

exports. default = new Database();