'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Images' }
    },
    commentHeader: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    commentBody: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Image, { foreignKey: 'imageId' });
  };
  return Comment;
};