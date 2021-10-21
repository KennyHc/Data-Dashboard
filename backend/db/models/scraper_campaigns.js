const campaign = (sequelize, DataTypes) => {
  const Campaign = sequelize.define(
    'campaign',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },

    {
      tableName: 'scraper_campaigns',
      indexes: [
        {
          unique: true,
          fields: ['id'],
        },
      ],
    }
  )
  return Campaign
}

module.exports = campaign
