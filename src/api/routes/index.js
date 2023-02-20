import { Router } from 'express'
import { TestRouter, AlbumRouter } from '../components/myComponent/routes.js'

const Routes = Router()

Routes.use('/', TestRouter)
Routes.use('/albums', AlbumRouter)

export { Routes }
