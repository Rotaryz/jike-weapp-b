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

  /**
   * 获取商家服务详情
   * @returns {Promise.<*>}
   */
  static async getService(loading = true) {
    const url = `${this.baseUrl}/api/merchants/merchant-service`
    return await this.get(url, {}, loading)
  }

  /**
   * 获取小程序码
   * @returns {Promise.<*>}
   */
  static async getMerchantQRcode(loading = true, data = {}) {
    const url = `${this.baseUrl}/api/merchants/shop-qrcode`
    return await this.get(url, data, loading)
  }

  /**
   * 获取盟主名称
   * @returns {Promise.<*>}
   */
  static async getInviter(code) {
    let data = {
      inviter_code: code
    }
    const url = `${this.baseUrl}/api/merchants/get-inviter`
    return await this.get(url, data)
  }

  /**
   * 提交开通服务表单
   * @returns {Promise.<*>}
   */
  static async openService(data) {
    const url = `${this.baseUrl}/api/merchants/open-service`
    return await this.post(url, data)
  }

  /**
   * 获取邀请码列表
   * @returns {Promise.<*>}
   */
  static async getInviterCode(status = 0, page = 1) {
    let data = {
      is_used: status,
      page
    }
    const url = `${this.baseUrl}/api/merchants/inviter-codes`
    return await this.get(url, data)
  }
}
