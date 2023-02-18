import server from './src/config/server.js'

const startup = async () => {
  try {
    console.log('Starting up...')
    await server.start()
  } catch (error) {
    console.error(`Error starting up: ${error}`)
  }
}

await startup()
