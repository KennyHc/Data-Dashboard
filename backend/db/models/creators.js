const Sequelize = require('sequelize')

const creators = (sequelize) => {
  const Creators = sequelize.define(
    'creators',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // uid: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      analytics_list: {
        type: Sequelize.JSONB,
        default: {},
      },
      bio: { type: Sequelize.TEXT, allowNull: false },
      //display_name: { type: Sequelize.TEXT }, //display name
      profile_photo_url: { type: Sequelize.TEXT, allowNull: false },
      clients: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      press: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      feed_urls: { type: Sequelize.ARRAY(Sequelize.TEXT) },
      hash_id: { type: Sequelize.STRING },
      public_url: { type: Sequelize.STRING },
      // gender: { type: Sequelize.STRING },
      created_by: { type: Sequelize.STRING },
      featured_content: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      social: { type: Sequelize.JSONB },
      //social_backup: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      display_preferences: { type: Sequelize.JSONB, default: {} },
      country: { type: Sequelize.STRING },
      region: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      street: { type: Sequelize.STRING },
      unit: { type: Sequelize.STRING },
      postcode: { type: Sequelize.STRING },
      template: { type: Sequelize.STRING },
      imported_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
      rating: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: -1,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['id'],
          name: 'unique_id_index',
        },
        {
          unique: false,
          fields: ['country'],
          name: 'country_index',
        },
        {
          unique: false,
          fields: ['created_by'],
          name: 'created_by_index',
        },
      ],
    }
  )

  return Creators
}

module.exports = creators
