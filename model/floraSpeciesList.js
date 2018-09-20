
module.exports = function(sequelize, DataTypes) {
    var floraSpeciesList = sequelize.define("floraSpeciesList", {
      speciesID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      speciesName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return floraSpeciesList;
  };
  