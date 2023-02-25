import Sequelize from 'sequelize'
import { currentEnv } from '../environment/index.js'

const sequelize = new Sequelize(
  currentEnv.DB_NAME,
  currentEnv.DB_USER,
  currentEnv.DB_PASSWORD,
  {
    host: currentEnv.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true },
      encrypt: true
    }
  }
)

export { sequelize }
