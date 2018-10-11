
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
        allowNull: false,
        unique: true
      },
      speciesRank: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return floraSpeciesList;
  };
  