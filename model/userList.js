module.exports = function(sequelize, DataTypes) {
    var userList = sequelize.define("userList", {
      userID: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
        userName: {
        type: DataTypes.STRING,
        foreignKey: true,
        allowNull: false
      },
        passHash: {
        type: DataTypes.STRING,
        allowNull: false
        }
    });
    return userList;
  };