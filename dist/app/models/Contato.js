"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Contato extends _sequelize.Model {
    static init(sequelize){
        super.init(
            {
                nome: _sequelize2.default.STRING,
                cpf: _sequelize2.default.STRING,
                cep: _sequelize2.default.STRING,
                lougradouro: _sequelize2.default.STRING,
                numero: _sequelize2.default.STRING,
                bairro: _sequelize2.default.STRING,
                cidade: _sequelize2.default.STRING,
                uf: _sequelize2.default.STRING,
                email: _sequelize2.default.STRING,
                telefone: _sequelize2.default.BIGINT,
                whatsapp: _sequelize2.default.BIGINT,
                status: _sequelize2.default.ENUM(
                    'NOVO', 
                    'EM_ATENDIMENTO',
                    'CONTRATADO',
                    'DESISTENTE')            
            },
            {
                sequelize,
            }
        );
        
        return this;
    }
    static associate(models){
        this.belongsTo( models.Curso, {foreignKey: 'curso_id', as: 'curso'})
    }

}
exports. default = Contato;