module.exports = function(sequelize, DataTypes) {
    var userList = sequelize.define("userList", {
      
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