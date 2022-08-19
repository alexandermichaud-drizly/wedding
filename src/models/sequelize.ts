import Sequelize from 'sequelize';

const host = 'wedding-rsvp-database.c3xugced8cg2.us-east-1.rds.amazonaws.com';
const dbUser = 'admin';
const dbPassword = 'ALdsm&$MP#QAGor6';
const dbName = 'wedding';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host,
  dialect: 'mysql',
});

export default sequelize;
