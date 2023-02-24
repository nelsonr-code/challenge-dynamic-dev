import { sequelize } from './src/config/database/index.js'
import server from './src/config/server.js'
import './src/config/database/models.js'

const startup = async () => {
  try {
    // await sequelize.authenticate()
    // console.log('Connected to database')
    await sequelize.sync({ force: false })
    console.log('Starting up...')
    await server.start()
  } catch (error) {
    console.error(`Error starting up: ${error}`)
  }
}

await startup()
