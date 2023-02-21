import Album from './albums.js'

export const testEndpoint = (req, resp) => {
  resp.send('Test endpoint!')
}

export const createAlbum = async (req, resp) => {
  console.log(req.body)
  try {
    const album = await Album.create(req.body)
    console.log('created:', album)
    resp.send(album)
  } catch (error) {
    console.error(`Error creating album: ${error}`)
    resp.status(500).send('Error creating album')
  }
}

export const listAlbums = async (req, resp) => {
  console.log(req.body)
  try {
    const albums = await Album.listAll()
    resp.send(albums)
  } catch (error) {
    console.error(`Error listing albums: ${error}`)
    resp.status(500).send('Error listing albums')
  }
}

export const getAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const album = await Album.getById(id)

    if (!album) {
      resp.sendStatus(404)
    } else {
      resp.json(album)
    }
  } catch (error) {
    console.error(`Error getting album: ${error}`)

    resp.status(500).json({ message: error })
  }
}

export const updateAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const albumToUpdate = req.body
    const albumUpdated = await Album.update(id, albumToUpdate)

    resp.json(albumUpdated)
  } catch (error) {
    console.error(`Error updating album: ${error}`)

    resp.sendStatus(500).json({ message: 'Error updating album' })
  }
}

export const deleteAlbum = async (req, resp) => {
  try {
    const { id } = req.params
    const isDeleted = await Album.delete(id)

    if (!isDeleted) {
      resp.sendStatus(404)
    }

    resp.sendStatus(204)
  } catch (error) {
    console.error(`Error deleting album: ${error}`)

    resp.sendStatus(500).json({ message: 'Error deleting album' })
  }
}
