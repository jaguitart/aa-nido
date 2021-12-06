'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        imageTitle: 'Test 1',
        imageUrl: 'https://images.unsplash.com/photo-1615935878018-e5fb62c82c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 1,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 1,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
