'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecommendationLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      RecommendationLog.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });

      RecommendationLog.belongsTo(models.Resource, {
        foreignKey: 'resourceId',
        as: 'resource'
      });
    }
  }
  RecommendationLog.init({
    userId: DataTypes.INTEGER,
    resourceId: DataTypes.INTEGER,
    recommendationReason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecommendationLog',
  });
  return RecommendationLog;
};