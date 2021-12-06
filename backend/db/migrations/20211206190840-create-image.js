'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageTitle: {
        type: Sequelize.STRING(200)
      },
      imageUrl: {
        type: Sequelize.STRING(3000),
        allowNull: false,

      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'Locations'}
      },
      imageBody: {
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'Users'}
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model : 'Albums'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};