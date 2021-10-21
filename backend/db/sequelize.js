const Sequelize = require('sequelize')

const ApplicationModel = require('./models/application')
const CompanyModel = require('./models/company')
const CategoryModel = require('./models/category')
const CreatorsModel = require('./models/creators')
const LocationModel = require('./models/location')
const ListingModel = require('./models/listing')
const ListingCategoryModel = require('./models/listing_category')
const ListingGenderModel = require('./models/listing_gender')
const ListingLocationModel = require('./models/listing_location')
const UserCategoryModel = require('./models/user_category')
const LinkedAccountsModel = require('./models/linked_accounts')
const UsersModel = require('./models/users')
const CompanyManagersModel = require('./models/company_managers')
const CampaignModel = require('./models/scraper_campaigns')

const sequelize = new Sequelize(
  'postgres://postgres:sasdfasdf@127.0.0.1:5432/interviewdb',
  {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: false,
      rejectUnauthorized: false,
    },
  }
)

scrapeInstagram = false
scrapeOpenGraph = false

const Application = ApplicationModel(sequelize, Sequelize)
const Company = CompanyModel(sequelize, Sequelize)
// const Age = AgeModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize)
const Location = LocationModel(sequelize, Sequelize)
const Listing = ListingModel(sequelize, Sequelize)
// const ListingAge = ListingAgeModel(sequelize, Sequelize);
const ListingCategory = ListingCategoryModel(sequelize, Sequelize)
const ListingGender = ListingGenderModel(sequelize, Sequelize)
const ListingLocation = ListingLocationModel(sequelize, Sequelize)

const UserCategory = UserCategoryModel(sequelize, Sequelize)
const Users = UsersModel(sequelize)
const Creators = CreatorsModel(sequelize)
const LinkedAccounts = LinkedAccountsModel(sequelize)
const CompanyManagers = CompanyManagersModel(sequelize)
const Campaign = CampaignModel(sequelize, Sequelize)

LinkedAccounts.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})
Users.hasMany(LinkedAccounts, { foreignKey: 'user_id' })

// Application
Creators.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})
Users.hasMany(Creators, { foreignKey: 'user_id' })

// Application
Application.belongsTo(Listing, {
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
})
Listing.hasMany(Application, { foreignKey: 'listing_id' })
Application.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})
Users.hasMany(Application, { foreignKey: 'user_id' })

// Company Manager
CompanyManagers.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})
Users.hasMany(CompanyManagers, { foreignKey: 'user_id' })
CompanyManagers.belongsTo(Company, {
  foreignKey: 'company_id',
  onDelete: 'CASCADE',
})
Company.hasMany(CompanyManagers, { foreignKey: 'company_id' })

UserCategory.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
Category.hasMany(UserCategory, { foreignKey: 'category_id' })
UserCategory.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})
Users.hasMany(UserCategory, { foreignKey: 'user_id' })

Listing.belongsTo(Company, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
})
Company.hasMany(Listing, { foreignKey: { allowNull: false } })

Listing.belongsToMany(Category, {
  through: ListingCategory,
  as: `categories`,
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
  otherKey: 'category_id',
})
Category.belongsToMany(Listing, {
  through: ListingCategory,
  as: `listings`,
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  otherKey: 'listing_id',
})

ListingCategory.belongsTo(Listing, {
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
})
Listing.hasMany(ListingCategory, { foreignKey: 'listing_id' })
ListingCategory.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
Category.hasMany(ListingCategory, { foreignKey: 'category_id' })

// Listing.belongsToMany(Age, { through: ListingAge, as: `ages`, foreignKey: 'listing_id', onDelete: 'CASCADE', otherKey: 'age_id' });
// Age.belongsToMany(Listing, { through: ListingAge, as: `listings`, foreignKey: 'age_id', onDelete: 'CASCADE', otherKey: 'listing_id' });

Listing.belongsToMany(Location, {
  through: ListingLocation,
  as: `locations`,
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
  otherKey: 'location_id',
})
Location.belongsToMany(Listing, {
  through: ListingLocation,
  as: `listings`,
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
  otherKey: 'listing_id',
})

ListingLocation.belongsTo(Listing, {
  foreignKey: 'listing_id',
  onDelete: 'CASCADE',
})
Listing.hasMany(ListingLocation, { foreignKey: 'listing_id' })
ListingLocation.belongsTo(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
})
Location.hasMany(ListingLocation, { foreignKey: 'location_id' })

const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testConnection()

module.exports = {
  Application,
  Company,
  CompanyManagers,
  Category,
  Campaign,
  Creators,
  Location,
  Listing,
  ListingCategory,
  LinkedAccounts,
  ListingLocation,
  Users,
  UserCategory,
  sequelize,
}
