import { Router } from 'express'
import { TestRouter } from '../components/myComponent/routes.js'

const Routes = Router()

Routes.use('/', TestRouter)

export { Routes }
