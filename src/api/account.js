import base from './base'

export default class Account extends base {
  /**
   * 获取子账户列表
   * @param
   * @returns {Promise.<*>}
   */
  static async getSubAccount() {
    const url = `${this.baseUrl}/api/merchants/merchant-children`
    return await this.get(url)
  }
  /**
   * 获取分店列表
   * @param
   * @returns {Promise.<*>}
   */
  static async getAnnexList() {
    const url = `${this.baseUrl}/api/merchants/chain-merchants`
    return await this.get(url)
  }

  /**
   * 获取销售联系方式
   * @param id 销售id
   * @returns {Promise.<*>}
   */
  static async getSalesMsg(id) {
    const url = `${this.baseUrl}/api/merchants/salesman/${id}`
    return await this.get(url)
  }

  /**
   * 投诉销售
   * @param id 销售id
   * @returns {Promise.<*>}
   */
  static async complaint(data) {
    const url = `${this.baseUrl}/api/merchants/complaints-salesman`
    return await this.post(url, data)
  }
}
