'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('blog_posts', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.STRING, allowNull: false },
      userId : { type: Sequelize.INTEGER, allowNull: false, field : 'user_id',
       references: { model: 'users', key: 'id' } },
      published: { type: Sequelize.DATE, allowNull: false },
      updated: { type: Sequelize.DATE, allowNull: false },
      }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('blog_posts');
  }
};
