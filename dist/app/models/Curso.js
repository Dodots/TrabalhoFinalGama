"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Curso extends _sequelize.Model {
    static init(sequelize){
        super.init(
            {
                nome: _sequelize2.default.STRING,
                categoria: _sequelize2.default.ENUM(
                    'EDUCACAO_BASICA', 
                    'GRADUACAO',
                    'POS_GRADUACAO',
                    'EDUCACAO_DISTANCIA')
            },
            {
                sequelize
            }
        );
        return this;
    }
    
}

exports. default = Curso;