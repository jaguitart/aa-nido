'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        imageTitle: 'Andean Condor',
        imageUrl: 'https://images.unsplash.com/photo-1615935878018-e5fb62c82c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'King penguin',
        imageUrl: 'https://images.unsplash.com/photo-1595792559652-dabdbffd5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 1,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Toco Toucan',
        imageUrl: 'https://images.unsplash.com/photo-1552761047-68f241b7aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 3,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 1,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Red-and-green Macaw',
        imageUrl: 'https://images.unsplash.com/photo-1626647772816-35c634699fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        locationId: 3,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 3,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Chilean Flamingo',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116077001/1800',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 3,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Marvelous Spatuletail',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/228591861/1800',
        locationId: 8,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Long-whiskered Owlet',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/210538181/1800',
        locationId: 8,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 1,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Humboldt Penguin',
        imageUrl: 'https://i.natgeofe.com/k/90d21d78-3239-4792-8ac7-b211880c2ee4/Humboldt-Penguin-Line.jpg',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
