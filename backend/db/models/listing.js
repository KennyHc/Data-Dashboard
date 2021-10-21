const listing = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    "listing",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "companies", key: "id" }
      },
      type: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      application_url: { type: DataTypes.TEXT, allowNull: true },
      affiliate_url: { type: DataTypes.TEXT },
      price_description: { type: DataTypes.TEXT, allowNull: false },
      info: { type: DataTypes.JSON },
      age: { type: DataTypes.RANGE, allowNull: false },
      // migration
      image_url: { type: DataTypes.TEXT, allowNull: true },
      product_images: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true
      },
      objective: { type: DataTypes.STRING, allowNull: true },
      platforms: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
      platform_content_type: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      },
      location: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
      tags: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
      post_description: { type: DataTypes.TEXT, allowNull: true },
      duration: { type: DataTypes.RANGE(DataTypes.DATEONLY), allowNull: true },
      budget: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
      payment: { type: DataTypes.JSON, allowNull: true },
      upfront: { type: DataTypes.INTEGER, allowNull: false },
      status: { type: DataTypes.INTEGER, allowNull: true },
      emailed: { type: DataTypes.DATE, allowNull: true, default: 1 },
      awin_id: { type: DataTypes.INTEGER, allowNull: true, unique: true },
      exclusive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      sort_weight: {
        type: DataTypes.REAL,
        allowNull: false,
        defaultValue: 0.0
      },
      // Bitfield with 0b001 = Male, 0b010 = Female, 0b100 = Other
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0b111 // Male, Female, Other
      },
      category: { type: DataTypes.ARRAY(DataTypes.STRING) },
      campaign_start: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "2000-01-01 00:00:00-00:00"
      },
      campaign_end: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "3000-01-01 00:00:00-00:00"
      }
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id", "type", "description", "price_description"]
        }
      ]
    }
  );
  return Listing;
};

module.exports = listing;
