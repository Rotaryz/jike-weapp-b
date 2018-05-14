import base from './base'

export default class Coupons extends base {
  /**
   * 获取优惠券类目
   * @returns {Promise.<*>}
   */
  static async getCouponsCategories() {
    const url = `${this.baseUrl}/api/coupons/categories`
    return await this.get(url)
  }

  /**
   * 创建优惠券
   * @param data 优惠券参数
   * @returns {Promise.<*>}
   */
  static async createCoupon(data) {
    const url = `${this.baseUrl}/api/coupons/promotions`
    return await this.post(url, data)
  }

  /**
   * 查询优惠券列表
   * @param data 优惠券参数
   * @returns {Promise.<*>}
   */
  static async getCouponList(data) {
    const url = `${this.baseUrl}/api/coupons/promotions`
    return await this.get(url, data)
  }

  /**
   * 删除销售优惠券
   * @param promotionId 优惠券id
   * @returns {Promise.<*>}
   */
  static async deleteCoupon(promotionId) {
    const url = `${this.baseUrl}/api/coupons/promotions/${promotionId}`
    return await this.delete(url)
  }

  /**
   * 获取优惠券详情
   * @param promotionId
   * @returns {Promise.<*>}
   */
  static async getCouponDetail(promotionId) {
    const url = `${this.baseUrl}/api/coupons/promotions/${promotionId}`
    return await this.get(url)
  }

  /**
   * 编辑优惠券
   * @param promotionId
   * @returns {Promise.<*>}
   */
  static async editCoupon(promotionId, data) {
    const url = `${this.baseUrl}/api/coupons/promotions/${promotionId}`
    return await this.put(url, data)
  }

  /**
   * 该优惠券绑定的活动名称
   * @param id
   * @returns {Promise<void>}
   */
  static async getRelation(id) {
    const url = `${this.baseUrl}/api/coupons/relation/${id}`
    return await this.get(url)
  }

  /**
   * 服务上线
   * @param id
   * @returns {Promise<void>}
   */
  static async serverOnLine(id) {
    const url = `${this.baseUrl}/api/coupons/online/${id}`
    return await this.get(url)
  }

  /**
   * 服务下线
   * @param id
   * @returns {Promise<void>}
   */
  static async serverOffLine(id) {
    const url = `${this.baseUrl}/api/coupons/offline/${id}`
    return await this.get(url)
  }
}
