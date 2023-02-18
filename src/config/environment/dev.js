import dotenv from 'dotenv'
dotenv.config()

const DEV_CONFIG = {
  PORT: process.env.PORT,
  BASE_URL: 'http://localhost:3000'
}

const { BASE_URL } = DEV_CONFIG
const myUrl = `${BASE_URL}/api/v1`

export { DEV_CONFIG, myUrl }
