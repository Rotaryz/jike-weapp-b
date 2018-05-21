/**
 * Created by user on 2018/5/19.
 */
import base from './base'
export default class orders extends base {
  /**
   * 订单列表
   * @returns {Promise.<*>}
   */
  static async getOrderList(data) {
    const url = `${this.baseUrl}/api/orders/wechat-orders`
    return await this.get(url, data)
  }

  /**
   * 订单详情
   * @param data
   * @returns {Promise.<*>}
   */
  static async getOrderDetail(id) {
    const url = `${this.baseUrl}/api/orders/wechat-orders/${id}`
    return await this.get(url)
  }

  /**
   * 订单搜索
   * @param data
   * @returns {Promise.<*>}
   */
  static async searchOrder(txt, page = 1) {
    let data = {
      keyword: txt,
      page
    }
    const url = `${this.baseUrl}/api/orders/search-orders`
    return await this.get(url, data)
  }
}
