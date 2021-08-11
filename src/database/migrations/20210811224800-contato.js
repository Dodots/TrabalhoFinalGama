'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contatos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cep: {
        type: Sequelize.STRING,
      },
      lougradouro: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.STRING,
      },
      bairro: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      uf: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      whatsapp: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      status: {
        type: Sequelize.ENUM(
          'NOVO', 
          'EM_ATENDIMENTO',
          'CONTRATADO',
          'DESISTENTE'),
        allowNull: false,
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cursos',
          key: 'id',
        }
      }      
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('contatos')
  }
};
