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
   * 创建分店管理账户
   * @param mobile 登陆账户 password 密码 belongs_to 门店ID
   * @returns {Promise.<*>}
   */
  static async setSubAccount(data) {
    const url = `${this.baseUrl}/api/merchants/create-merchant-child`
    return await this.post(url, data)
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
