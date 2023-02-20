import { Router } from 'express'
import {
  testEndpoint,
  createAlbum,
  getAlbum,
  listAlbums,
  updateAlbum,
  deleteAlbum
} from './controller.js'

const TestRouter = Router()
const AlbumRouter = Router()

// Test endpoint
TestRouter.get('/test', testEndpoint)

// Album endpoints
AlbumRouter.post('/', createAlbum)
AlbumRouter.get('/:id', getAlbum)
AlbumRouter.get('/', listAlbums)
AlbumRouter.put('/:id', updateAlbum)
AlbumRouter.delete('/:id', deleteAlbum)

export { TestRouter, AlbumRouter }
