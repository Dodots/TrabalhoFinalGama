import Sequelize, { Model } from 'sequelize';

class Contato extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                cpf: Sequelize.STRING,
                cep: Sequelize.STRING,
                lougradouro: Sequelize.STRING,
                numero: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                uf: Sequelize.STRING,
                email: Sequelize.STRING,
                telefone: Sequelize.BIGINT,
                whatsapp: Sequelize.BIGINT,
                status: Sequelize.ENUM(
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
export default Contato;