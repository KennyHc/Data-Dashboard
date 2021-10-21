const age = (sequelize, DataTypes) => {
  const Age = sequelize.define(
    'age',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['id', 'value'],
        },
      ],
    }
  )
  return Age
}

module.exports = age
