'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(24)
    },
    username: {
      type: Sequelize.STRING(24)
    },
    password: {
      type: Sequelize.STRING(256)
    },
    email: {
      type: Sequelize.STRING(128)
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      default: Sequelize.NOW
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      default: Sequelize.NOW
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
   });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users');
  }
};
