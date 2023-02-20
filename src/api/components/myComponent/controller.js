import Album from './albums.js'

export const testEndpoint = (req, resp) => {
  resp.send('Test endpoint!')
}

export const createAlbum = async (req, resp) => {
  console.log(req.body)
  const album = await Album.create(req.body)
  resp.send(album)
}

export const listAlbums = async (req, resp) => {
  // const albums = await Album.find({})
  console.log(req.body)
  const albums = await Album.listAll()
  resp.send(albums)
}

export const getAlbum = async (req, resp) => {
  const album = await Album.getById(req.params.id)
  resp.send(album)
}

export const updateAlbum = async (req, resp) => {
  const album = await Album.getById(req.params.id)
  Album.update(album)
  resp.send(album)
}

export const deleteAlbum = async (req, resp) => {
  const album = await Album.getById(req.params.id)
  Album.delete(album)
  resp.send(album)
}
