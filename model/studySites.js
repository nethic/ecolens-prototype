
module.exports = function(sequelize, DataTypes) {
    var studySites = sequelize.define("studySites", {
      siteID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      siteName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
    return studySites;
  };
  