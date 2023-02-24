// import { CustomError } from '../../../helpers/errorsHandler.js'
import Album from './albums.js'

export const testEndpoint = (req, resp) => {
  resp.send('Test endpoint!')
}

export const createAlbum = async (req, resp, next) => {
  console.log(req.body)
  try {
    const album = await Album.create(req.body)

    resp
      .status(200)
      .json({ statusCode: 200, statusText: 'success', data: album })
  } catch (error) {
    console.error(`Error creating album: ${error}`)

    resp.status(error.errors[0].original.status || 500).json({
      message: error.errors[0].message,
      statusCode: error.errors[0].original.status || 500,
      statusText: error.errors[0].type,
      data: null
    })
  }
}

export const getAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const album = await Album.getById(id)

    if (!album) {
      // resp.sendStatus(404)
      resp.status(404).json({
        statusCode: 404,
        statusText: 'Not found',
        message: 'Album not found'
      })
    } else {
      // resp.json(album)
      resp
        .status(200)
        .json({ statusCode: 200, statusText: 'success', data: album })
    }
  } catch (error) {
    console.error(`Error getting album: ${error}`)

    resp.status(500).json({ message: error })
  }
}

export const listAlbums = async (req, resp) => {
  console.log(req.body)
  try {
    const albums = await Album.listAll()
    // resp.send(albums)
    resp.status(200).json({ status: 'success', data: albums })
  } catch (error) {
    console.error(`Error listing albums: ${error}`)
    resp.status(500).send('Error listing albums')
  }
}

export const updateAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const albumToUpdate = req.body
    const albumUpdated = await Album.update(id, albumToUpdate)

    resp.status(200).json({ message: 'Album updated', data: albumUpdated })
  } catch (error) {
    console.error(`Error updating album: ${error}`)

    resp.status(500).json({ message: 'Error updating album' })
  }
}

export const deleteAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const isDeleted = await Album.delete(id)
    console.log(isDeleted)

    if (!isDeleted) {
      resp.status(404).json({
        statusCode: 404,
        statusText: 'Not found',
        message: 'Album not found'
      })
    } else {
      resp.status(204).json({ message: 'Album deleted' })
    }
  } catch (error) {
    console.error(`Error deleting album: ${error}`)

    resp.status(500).json({ message: 'Error deleting album' })
  }
}
