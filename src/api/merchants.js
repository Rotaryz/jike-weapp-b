import base from './base'

export default class Merchants extends base {
  /**
   * 获取门店/证件信息
   * @returns {Promise.<*>}
   */
  static async getMerchantData(data) {
    const url = `${this.baseUrl}/api/merchants/get-data`
    return await this.get(url, data)
  }
}
