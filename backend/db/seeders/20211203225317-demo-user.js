'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'DemoUser',
        email: 'demo@user.io',
        country: 'USA',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: faker.internet.email(),
        username: 'Red_Robin',
        country: 'Italy',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: faker.internet.email(),
        username: 'Birdman01',
        country: 'Brazil',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'JhonDoe', 'BirdMan'] }
    }, {});
  }
};