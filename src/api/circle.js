/**
 * Created by user on 2018/3/14.
 */
import base from './base'
export default class circle extends base {
  /**
   * 设置商家地图显示时间
   * @param data
   * @returns {Promise.<*>}
   */
  static async setMapShowed(data) {
    const url = `${this.baseUrl}/api/circle/set-map-showed`
    return await this.post(url, data)
  }
  /**
   * 获取商家列表
   * @param data
   * @returns {Promise.<*>}
   */
  static async getShopList(data) {
    const url = `${this.baseUrl}/api/circle/circle-share-merchant-list`
    // const url = `${this.baseUrl}/api/circle/circle-share-merchants`
    return await this.get(url, data)
  }
  /**
   * 投放店铺发起支付
   * @param data
   * @returns {Promise.<*>}
   */
  static async createPutPay(data) {
    const url = `${this.baseUrl}/api/circle/put-in-shop-pay`
    return await this.post(url, data)
  }
  /**
   * 投放店铺开通列表
   * @param data
   * @returns {Promise.<*>}
   */
  static async dredgeList(data) {
    const url = `${this.baseUrl}/api/circle/put-in-shop-orders`
    return await this.get(url, data)
  }
  /**
   * 投放消息列表
   * @param data
   * @returns {Promise.<*>}
   */
  static async merchantList(data) {
    const url = `${this.baseUrl}/api/circle/merchant-message-list`
    return await this.get(url, data)
  }
  /**
   * 投放消息审核
   * @param data
   * @returns {Promise.<*>}
   */
  static async merchantAudit(data) {
    const url = `${this.baseUrl}/api/circle/examine-merchant-order`
    return await this.post(url, data)
  }
  /**
   * 获取投放设置
   * @param data
   * @returns {Promise.<*>}
   */
  static async getShopSetting(data) {
    const url = `${this.baseUrl}/api/circle/put-in-shop-setting`
    return await this.get(url, data)
  }
}
