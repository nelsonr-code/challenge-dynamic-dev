import dotenv from 'dotenv'
dotenv.config()

const DEV_CONFIG = {
  PORT: process.env.PORT,
  BASE_URL: 'http://localhost:3000',
  DB: {
    HOST: process.env.DB_HOST,
    DATABASE: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD
  }
}

const { BASE_URL } = DEV_CONFIG
const myUrl = `${BASE_URL}/api/v1`

export { DEV_CONFIG, myUrl }
