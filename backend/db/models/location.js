'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    location: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {});
  Location.associate = function(models) {
    Location.hasMany(models.Image, { foreignKey: 'locationId' });
  };
  return Location;
};