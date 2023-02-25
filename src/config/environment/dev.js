import dotenv from 'dotenv'
dotenv.config()

const DEV_CONFIG = {
  PORT: process.env.PORT,
  BASE_URL: 'http://localhost:3000',
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
}

const { BASE_URL } = DEV_CONFIG
const myUrl = `${BASE_URL}/api/v1`

export { DEV_CONFIG, myUrl }
