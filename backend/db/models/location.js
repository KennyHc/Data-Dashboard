const location = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id", "value"]
        },
        {
          unique: true,
          name: "unique_location",
          fields: [sequelize.fn("lower", sequelize.col("value"))]
        }
      ]
    }
  );
  return Location;
};

module.exports = location;
