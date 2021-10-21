const category = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
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
          name: "unique_category",
          fields: [sequelize.fn("lower", sequelize.col("value"))]
        }
      ]
    }
  );
  return Category;
};

module.exports = category;
