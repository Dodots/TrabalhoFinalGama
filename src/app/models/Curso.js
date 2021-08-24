import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                categoria: Sequelize.ENUM(
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
    static associate(models){
        this.hasMany( models.Contato, {foreignKey: 'curso_id', as: 'curso'})
    }
    
}

export default Curso;