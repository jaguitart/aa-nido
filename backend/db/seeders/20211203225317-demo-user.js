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
        username: 'FakeUser1',
        country: 'Italy',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        country: 'Brazil',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};