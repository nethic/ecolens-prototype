
module.exports = function(sequelize, DataTypes) {
    var speciesList = sequelize.define("speciesList", {
      speciesID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      speciesName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      speciesPresence: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
    return speciesList;
  };
  