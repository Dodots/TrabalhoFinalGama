import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Curso from '../app/models/Curso'
import Contato from '../app/models/Contato'

const models = [Curso, Contato];

class Database {
    constructor(){
        this.init();
    }    

    init(){
        this.connection = new Sequelize(databaseConfig);

        models
        .map (model => model.init(this.connection))
        .map( model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database();