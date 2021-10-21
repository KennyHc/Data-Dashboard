const listing_gender = (sequelize, DataTypes) => {
  const Listing_gender = sequelize.define(
    "listing_gender",
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
      gender_id: {
        type: DataTypes.UUID,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "genders",
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
  return Listing_gender;
};

module.exports = listing_gender;
