'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Comments', [
     {
       userId: 1,
       imageId: 1,
       commentHeader: 'Test Comment Header',
       commentBody: 'Test Comment Body',
       createdAt: new Date(),
       updatedAt: new Date()
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
