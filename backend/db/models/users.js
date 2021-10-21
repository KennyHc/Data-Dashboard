const Sequelize = require("sequelize");

const users = sequelize => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firebase_id: {
        type: Sequelize.STRING,
        default: null
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      password_salt: {
        type: Sequelize.STRING,
        allowNull: true
      },
      user_type: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      last_login_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isAdmin_old: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      imported_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      indexes: [
        {
          unique: true,
          name: "unique_email",
          fields: [sequelize.fn("lower", sequelize.col("email"))]
        },
        {
          unique: true,
          name: "unique_firebase_id",
          fields: ["firebase_id"]
        },
        {
          unique: true,
          name: "unique_id",
          fields: ["id"]
        }
      ]
    }
  );

  return Users;
};

module.exports = users;
