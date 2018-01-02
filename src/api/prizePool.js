import base from './base'

export default class PrizePool extends base {
  /**
   * 获取奖品池
   * @param
   * @returns {Promise.<*>}
   */
  static async getPrizelist(status = 1, type = 1) {
    const url = `${this.baseUrl}/api/activity/prize-pool`
    let data = {
      use_status: status,
      use_type: type
    }
    return await this.get(url, data)
  }
  /**
   * 新建兑换券
   * @param
   * @returns {Promise.<*>}
   */
  static async createEXchange(data) {
    const url = `${this.baseUrl}/api/coupons/promotions`
    return await this.post(url, data)
  }
  /**
   * 编辑兑换券
   * @param
   * @returns {Promise.<*>}
   */
  static async changeEXchange(data, id) {
    const url = `${this.baseUrl}/api/coupons/promotions/${id}`
    return await this.put(url, data)
  }
  /**
   * 查询商家余额
   * @param
   * @returns {Promise.<*>}
   */
  static async getStoreBalance() {
    const url = `${this.baseUrl}/api/merchants/remaining`
    return await this.get(url)
  }
  /**
   * 新建红包
   * @param
   * @returns {Promise.<*>}
   */
  static async createRedpack(data) {
    const url = `${this.baseUrl}/api/redpackets/promotion`
    return await this.post(url, data)
  }
  /**
   * 删除兑换券
   * @param
   * @returns {Promise.<*>}
   */
  static async delexchange(id) {
    const url = `${this.baseUrl}/api/coupons/promotions/${id}`
    return await this.delete(url)
  }
  /**
   * 兑换券详情
   * @param id 兑换券id
   * @returns {Promise.<*>}
   */
  static async exchangeDetail(id) {
    const url = `${this.baseUrl}/api/coupons/promotions/${id}`
    return await this.get(url)
  }
}
