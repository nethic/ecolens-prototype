
module.exports = function(sequelize, DataTypes) {
    var floraFamilyList = sequelize.define("floraFamilyList", {
      familyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      familyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
    return floraFamilyList;
  };
  