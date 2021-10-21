const Sequelize = require("sequelize");

const linked_account = sequelize => {
  const LinkedAccount = sequelize.define(
    "linked_account",
    {
      linked_user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
        // allowNull: false
      },
      extras: {
        type: Sequelize.JSON
      },
      demographic: {
        type: Sequelize.JSON
      },
      // monthly account_insights for both
      // has past and current keys
      account_insights: {
        type: Sequelize.JSON
      },
      // this is media insights for fb
      // and year data for yt
      source_insights: {
        type: Sequelize.JSON
      },
      account_stats: {
        type: Sequelize.JSON
      },
      account_source: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      account_id: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      account_access_token: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      featured: {
        type: Sequelize.JSON
      },
      etc: {
        type: Sequelize.JSON
      },
      selected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      token_data: {
        type: Sequelize.JSON,
        defaultValue: null
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["linked_user", "account_source"]
        },
        {
          name: "user_id_index",
          fields: ["user_id"]
        }
      ]
    }
  );
  return LinkedAccount;
};

module.exports = linked_account;
