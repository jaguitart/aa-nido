'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
       albumTitle: 'Test Album',
       createdAt: new Date(),
       updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
