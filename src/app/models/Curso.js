import Sequelize, { Model } from 'sequelize';

class Curso extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                categoria: Sequelize.ENUM
            },
            {
                sequelize
            }
        );
        Curso.associations = function(models){
            Curso.hasMany(models.Contato)
        }
        return Curso;
    }
}

export default Curso;