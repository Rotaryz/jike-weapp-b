import base from './base'

export default class Uploads extends base {
  static async uploadImages(data, name = 'file') {
    const url = `${this.baseUrl}/api/images`
    return await this.upload(url, data, name)
  }

  /**
   * 上传视频
   * @param data
   * @returns {Promise.<*>}
   */
  static async uploadVideo(data) {
    const url = `${this.baseUrl}/api/files`
    return await this.upload(url, data)
  }
}
