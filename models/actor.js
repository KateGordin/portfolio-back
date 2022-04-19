"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      actor.belongsToMany(models.order, {
        through: "orderItems",
        foreignKey: "actorId",
      });
    }
  }
  actor.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "actor",
    }
  );
  return actor;
};
