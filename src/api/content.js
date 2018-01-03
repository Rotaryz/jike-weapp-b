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

  /**
   * 内容列表
   * @param data
   * @returns {Promise.<*>}
   */
  static async contentList(data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents`
    return await this.get(url, data)
  }

  /**
   * 内容上下线切换
   * @param data
   * @returns {Promise.<*>}
   */
  static async switchOnline(data) {
    const url = `${this.baseUrl}/api/contents/switch-online/${data}`
    return await this.get(url)
  }

  /**
   * 内容删除
   * @param data
   * @returns {Promise.<*>}
   */
  static async delContent(data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents/${data}`
    return await this.delete(url)
  }

  /**
   * 内容详情
   * @param data
   * @returns {Promise.<*>}
   */
  static async contentDetail(data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents/${data}`
    return await this.get(url)
  }

  /**
   * 内容编辑
   * @param data
   * @returns {Promise.<*>}
   */
  static async merchantDetail(id, data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents/${id}`
    return await this.put(url, data)
  }
}
