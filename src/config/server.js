import express from 'express'
import { currentEnv } from '../config/environment/index.js'
import middlewares from '../middlewares/index.js'
import { Routes } from '../api/routes/index.js'

const { PORT, DB } = currentEnv

class Server {
  constructor() {
    this._app = null
    this._server = null
  }

  static get appPort() {
    return PORT
  }

  static get appDb() {
    return DB
  }

  init() {
    this._app = express()
  }

  app() {
    return this._app
  }

  server() {
    return this._server
  }

  setMiddlewares() {
    if (!this.app()) console.error('error')

    middlewares(this.app())
  }

  start() {
    this.init()
    this.setMiddlewares()
    this.setApiRoutes('/', Routes)

    return new Promise((resolve, reject) => {
      const http = this._app.listen(Server.appPort, () => {
        const { port } = http.address()
        console.info(`[Musicfy] running at PORT [${port}]`)
        resolve()
      })
    })
  }

  setApiRoutes(baseUrl, router) {
    this.app().use(baseUrl, router)
  }
}

export default new Server()
