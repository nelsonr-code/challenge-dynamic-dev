import { Albums } from '../../../config/database/models.js'
export default class Album {
  static async create(albumData) {
    try {
      const albumToCreate = {
        name: albumData.name,
        artist: albumData.artist,
        yearRelease: albumData.yearRelease,
        urlImage: albumData.urlImage
      }

      const newAlbum = await Albums.create(albumToCreate)
      console.log('created:', newAlbum)
      return newAlbum
    } catch (error) {
      console.error(`Error creating album: ${error}`)
      return error
    }
  }

  static async listAll() {
    try {
      const albumList = await Albums.findAll()

      return albumList
    } catch (error) {
      console.error(`Error listing albums: ${error}`)
      return error
    }
  }

  static async getById(id) {
    try {
      const album = await Albums.findOne({
        where: {
          id
        }
      })

      return album
    } catch (error) {
      console.error(`Error getting album: ${error}`)
      return error
    }
  }

  static async update(id, data) {
    try {
      const album = await Albums.findByPk(id)
      album.name = data.name
      album.artist = data.artist
      album.yearRelease = data.yearRelease
      album.urlImage = data.urlImage

      await album.save()

      return album
    } catch (error) {
      console.error(`Error updating album: ${error}`)
      return error
    }
  }

  static async delete(id) {
    try {
      await Albums.destroy({
        where: {
          id
        }
      })

      return true
    } catch (error) {
      console.error(`Error deleting album: ${error}`)
      return false
    }
  }
}
