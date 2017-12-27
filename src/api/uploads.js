import base from './base'

export default class Uploads extends base {
  static async uploadImages(data) {
    const url = `${this.baseUrl}/api/images`
    return await this.upload(url, data)
  }
}
