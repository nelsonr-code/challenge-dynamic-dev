import dotenv from 'dotenv'
import { DEV_CONFIG } from './dev.js'
dotenv.config()

const { NODE_ENV } = process.env
let currentEnv = DEV_CONFIG

if (NODE_ENV === 'production') {
  currentEnv = ''
}

export { currentEnv }
