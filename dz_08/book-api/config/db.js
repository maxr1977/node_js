import Sequelize from 'sequelize';

import dbConfig from './config.json' with { type: 'json' };

const envConfig = dbConfig.development;

const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect,
  }
);

export default sequelize;