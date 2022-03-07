'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 57,
        commentHeader: '',
        commentBody: 'This is an amazing picture!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 56,
        commentHeader: '',
        commentBody: 'Beautiful colors',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 55,
        commentHeader: '',
        commentBody: 'Elegant picture.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 54,
        commentHeader: '',
        commentBody: 'It must be my extreme good luck to have got a chance to see such a beautiful picture!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 57,
        commentHeader: '',
        commentBody: 'Simply beautiful,awesome work',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
