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
    
}

export default Curso;