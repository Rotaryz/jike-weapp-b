/**
 * Created by user on 2017/12/21.
 */
import base from './base'
export default class shop extends base {
  /**
   * 商家数据信息
   * @param data
   * @returns {Promise.<*>}
   */
  static async dataTrend(data) {
    const url = `${this.baseUrl}/api/merchants/data-trend`
    return await this.get(url, data)
  }

  /**
   * 输码核销
   * @param data
   * @returns {Promise.<*>}
   */
  static async verification(data) {
    const url = `${this.baseUrl}/api/coupons/verification/${data}`
    return await this.get(url)
  }

  /**
   * 核销记录
   * @param data
   * @returns {Promise.<*>}
   */
  static async verificationLog(data) {
    const url = `${this.baseUrl}/api/coupons/verification-log`
    return await this.get(url)
  }

  /**
   * 商圈
   * @param data
   * @returns {Promise.<*>}
   */
  static async checkBusiness(data) {
    const url = `${this.baseUrl}/api/merchants/business-circle-merchants`
    return await this.get(url, data)
  }

  /**
   * 商圈列表
   * @param data
   * @returns {Promise.<*>}
   */
  static async industries(data) {
    const url = `${this.baseUrl}/api/coupons/industries`
    return await this.get(url, data)
  }

  /**
   * 设置地图显示时间
   * @param data
   * @returns {Promise.<*>}
   */
  static async setMapShowed(data) {
    const url = `${this.baseUrl}/api/merchants/set-map-showed`
    return await this.post(url, data)
  }

  /**
   * 客户概况
   * @param data
   * @returns {Promise.<*>}
   */
  static async customerTrend(data) {
    const url = `${this.baseUrl}/api/merchants/customer-trend`
    return await this.get(url, data)
  }

  /**
   * 客户列表
   * @returns {Promise.<*>}
   */
  static async customerList(data) {
    const url = `${this.baseUrl}/api/merchants/customer-list`
    return await this.get(url, data)
  }

  /**
   * 性别分布
   * @returns {Promise.<*>}
   */
  static async customerSex() {
    const url = `${this.baseUrl}/api/merchants/customer-sex`
    return await this.get(url)
  }

  /**
   * 城市分布ity
   * @returns {Promise.<*>}
   */
  static async customerCity() {
    const url = `${this.baseUrl}/api/merchants/customer-city`
    return await this.get(url)
  }

  /**
   * 商家星级评定
   * @returns {Promise.<*>}
   */
  static async getStar() {
    const url = `${this.baseUrl}/api/appraises/get-star`
    return await this.get(url)
  }

  /**
   * 商店评价内容
   * @returns {Promise.<*>}
   */
  static async getComment() {
    const url = `${this.baseUrl}/api/appraises/star`
    return await this.get(url)
  }

  /**
   * 订单列表
   * @returns {Promise.<*>}
   */
  static async wechatOrders(data) {
    const url = `${this.baseUrl}/api/orders/wechat-orders`
    return await this.get(url, data)
  }

  /**
   * 订单详情
   * @param data
   * @returns {Promise.<*>}
   */
  static async Orders(id) {
    const url = `${this.baseUrl}/api/orders/wechat-orders/${id}`
    return await this.get(url)
  }
}
