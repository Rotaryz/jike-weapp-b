/**
 * Created by user on 2017/12/28.
 */
import base from './base'
export default class content extends base {
  /**
   * 添加优惠券
   * @param data
   * @returns {Promise.<*>}
   */
  static async coupon(data) {
    const url = `${this.baseUrl}/api/coupons/promotions`
    return await this.get(url, data)
  }

  /**
   * 新建内容
   * @param data
   * @returns {Promise.<*>}
   */
  static async createContent(data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents`
    return await this.post(url, data)
  }
}
