"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Biodata, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      })
      Users.hasOne(models.History, {
        foreignKey: "userId",
        onDelete: "SET NULL",
      })
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  )
  return Users
}
