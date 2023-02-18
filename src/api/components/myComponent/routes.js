import { Router } from 'express'
import { testEndpoint } from './controller.js'

const TestRouter = Router()

TestRouter.get('/test', testEndpoint)

export { TestRouter }
