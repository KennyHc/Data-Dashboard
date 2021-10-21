const listing_category = (sequelize, DataTypes) => {
  const Listing_category = sequelize.define(
    "listing_category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      listing_id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "listings",
          key: "id"
        }
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "categories",
          key: "id"
        }
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id"]
        }
      ]
    }
  );
  return Listing_category;
};

module.exports = listing_category;
