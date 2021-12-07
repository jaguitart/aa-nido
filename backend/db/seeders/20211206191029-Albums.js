'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
       albumTitle: 'Album User 1',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        userId: 2,
       albumTitle: 'Album User 2',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        userId: 3,
       albumTitle: 'Album User 3',
       createdAt: new Date(),
       updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};
