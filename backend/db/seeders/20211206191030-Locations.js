'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {
        location: 'Argentina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Bolivia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Brazil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Chile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Ecuador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Paraguay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Peru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Suriname',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Uruguay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location: 'Venezuela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
