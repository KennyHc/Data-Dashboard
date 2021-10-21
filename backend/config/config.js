module.exports = {
  development: {
    username: 'postgres',
    password: 'sasdfasdf',
    database: 'interviewdb',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: false,
      rejectUnauthorized: false,
    },
  },
}
