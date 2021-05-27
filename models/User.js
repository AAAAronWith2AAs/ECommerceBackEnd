//here will be my model for users
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//constructing our model --user_id, username, email, password

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
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
