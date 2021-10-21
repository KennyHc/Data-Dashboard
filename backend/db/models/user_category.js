const userCategory = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define(
    "user_category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "categories",
          key: "id"
        }
      },
      // UID from firebase decoded token
      uid: {
        type: DataTypes.STRING
      },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
          model: "users",
          key: "id"
        }
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id"]
        },
        {
          unique: true,
          fields: ["category_id", "uid"]
        },
        {
          unique: false,
          fields: ["user_id"],
          name: "user_id_user_category_index"
        }
      ]
    }
  );
  return UserCategory;
};

module.exports = userCategory;
