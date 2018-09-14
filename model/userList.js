module.exports = function(sequelize, DataTypes) {
    var userList = sequelize.define("userList", {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
        userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
        passHash: {
        type: DataTypes.STRING,
        allowNull: false
        }
    });
    return userList;
  };