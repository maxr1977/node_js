'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable('Apps', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Apps');
  }
};
