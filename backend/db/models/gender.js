const gender = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "gender",
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
          name: "unique_gender",
          fields: [sequelize.fn("lower", sequelize.col("value"))]
        }
      ]
    }
  );
  return Gender;
};

module.exports = gender;
