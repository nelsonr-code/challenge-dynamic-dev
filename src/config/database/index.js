import Sequelize from 'sequelize'
import { currentEnv } from '../environment/index.js'

const config = {
  database: currentEnv.DB.DATABASE,
  username: currentEnv.DB.USER,
  password: currentEnv.DB.PASSWORD,
  host: currentEnv.DB.HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: { require: true },
    encrypt: true
  }
}

export const sequelize = new Sequelize(config)
