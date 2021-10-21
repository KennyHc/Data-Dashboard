const Sequelize = require("sequelize");

const companyManagers = sequelize => {
  return sequelize.define(
    "company_managers",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "companies",
          key: "id"
        },
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        allowNull: false
      },

      is_admin: {
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    },
    {
      uniqueKeys: {
        actions_unique: {
          fields: ["user_id", "company_id"]
        }
      },
      indexes: [
        {
          unique: true,
          fields: ["id"]
        },
        {
          unique: true,
          fields: ["company_id", "user_id"]
        }
      ]
    }
  );
};

module.exports = companyManagers;
