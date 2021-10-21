const listing_age = (sequelize, DataTypes) => {
  const Listing_age = sequelize.define(
    "listing_age",
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
      age_id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "ages",
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
  return Listing_age;
};

module.exports = listing_age;
