'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('categories', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('categories');
  }
};
