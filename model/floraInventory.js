
module.exports = function(sequelize, DataTypes) {
    var floraInventory = sequelize.define("floraInventory", {
      recordID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      studyYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return floraInventory;
  };
  