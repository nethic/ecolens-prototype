
module.exports = function(sequelize, DataTypes) {
    var studySites = sequelize.define("studySites", {
      siteID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      siteName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return studySites;
  };
  