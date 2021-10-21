const company = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "company",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // UID from firebase decoded token
      uid: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      website_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profile_url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      graph_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      social_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      social_data: {
        type: DataTypes.JSON,
        allowNull: true
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      info: {
        type: DataTypes.JSON
      },
      follower_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      private: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      tied_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      awin_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      },
      rating: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: -1
      },
      tos: {
        type: "TIMESTAMP",
        defaultValue: null
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id"]
        },
        {
          unique: false,
          fields: ["tied_email"]
        }
      ]
    }
  );
  return Company;
};

module.exports = company;
