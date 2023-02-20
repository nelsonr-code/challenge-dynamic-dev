import { get, post, put, del } from '../../../helpers/requests.js'

export default class Album {
  static async create() {
    try {
      const album = await post()

      return album
    } catch (error) {}
  }

  static async listAll() {
    try {
      const albumList = await get()

      return albumList
    } catch (error) {}
  }

  static async getById() {
    try {
      const album = await get()

      return album
    } catch (error) {}
  }

  static async update() {
    try {
      const album = await put()

      return album
    } catch (error) {}
  }

  static async delete() {
    try {
      const album = await del()

      return album
    } catch (error) {}
  }
}
