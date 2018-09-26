
module.exports = function(sequelize, DataTypes) {
    var floraInventory = sequelize.define("floraInventory", {
      recordID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      studyYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return floraInventory;
  };
  