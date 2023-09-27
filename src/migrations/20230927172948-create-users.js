'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: { type: Sequelize.STRING, allowNull: false, field: 'display_name' },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      image: { type: Sequelize.STRING, allowNull: false },
    }, { timestamps: false });
    
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users');
  }
};
