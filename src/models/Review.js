const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("reviews", {
    title: {
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // validate: {
      //   min: 0,
      //   max: 5,
      //   isInt: true,
      // },
    },
    description: {
      type: DataTypes.TEXT,
      //allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
};
