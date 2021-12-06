'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageTitle: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(3000),
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Locations' }
    },
    imageBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Albums' }
    },
  }, {});
  Image.associate = function (models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    Image.belongsTo(models.Album, { foreignKey: 'albumId' });
    Image.belongsTo(models.Location, { foreignKey: 'locationId' });
    Image.hasMany(models.Comment, { foreignKey: 'commentId' });
  };
  return Image;
};