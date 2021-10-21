const listing_location = (sequelize, DataTypes) => {
  const Listing_location = sequelize.define(
    "listing_location",
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
      location_id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "locations",
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
  return Listing_location;
};

module.exports = listing_location;
