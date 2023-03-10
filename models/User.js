const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//add bcrypt
class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING, //add constraints
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
