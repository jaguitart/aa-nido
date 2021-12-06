'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    albumTitle: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
  }, {});
  Album.associate = function (models) {
    Album.belongsTo(models.User, {foreignKey: 'albumId'});
    Album.hasMany(models.Image, {foreignKey: 'albumId'});
  };
  return Album;
};