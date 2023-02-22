import cors from 'cors'
import encoding from './encoding.js'

export default (app) => {
  encoding(app)
  app.use(cors())
}
