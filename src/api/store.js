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

}
