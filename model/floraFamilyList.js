
module.exports = function(sequelize, DataTypes) {
    var floraFamilyList = sequelize.define("floraFamilyList", {
      familyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      familyName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return floraFamilyList;
  };
  