import base from './base'

export default class Store extends base {
  /**
   * 获取门店信息
   * @param
   * @returns {Promise.<*>}
   */
  static async getMsgList() {
    const url = `${this.baseUrl}/api/merchants/get-data`
    return await this.get(url)
  }
  /**
   * 获取地区对应商圈
   * @param district 地区
   * @returns {Promise.<*>}
   */
  static async getArea(district) {
    let data = {
      district
    }
    const url = `${this.baseUrl}/api/merchants/business-circle`
    return await this.get(url, data)
  }
  /**
   * 商家证照编辑
   * @param
   * @returns {Promise.<*>}
   */
  static async setLicense(data) {
    const url = `${this.baseUrl}/api/merchants/set-credential-data`
    return await this.post(url, data)
  }
  /**
   * 门店信息编辑
   * @param
   * @returns {Promise.<*>}
   */
  static async setStoreMsg(data) {
    const url = `${this.baseUrl}/api/merchants/set-data`
    return await this.post(url, data)
  }
  /**
   * 注销登录
   * @param
   * @returns {Promise.<*>}
   */
  static async logoutAccount() {
    const url = `${this.baseLogin}/api/merchants/logout`
    return await this.post(url)
  }


}
