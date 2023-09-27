'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.createTable('posts_categories', {
        postId: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false, 
          field: 'post_id', references: { model: 'blog_posts', key: 'id' }, onDelete: 'CASCADE' },
        categoryId: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
          field: 'category_id', references: { model: 'categories', key: 'id' }, onDelete: 'CASCADE' },
      }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('posts_categories');
  }
};
