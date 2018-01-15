import base from './base'

export default class Packages extends base {
  /**
   * 获取行业列表
   * @returns {Promise.<*>}
   */
  static async getIndustries() {
    const url = `${this.baseUrl}/api/coupons/industries`
    return await this.get(url)
  }

  /**
   * 获取门店列表
   * @returns {Promise.<*>}
   */
  static async getMerchantStores(data) {
    const url = `${this.baseUrl}/api/coupons/gift-bag-merchants`
    return await this.post(url, data)
  }

  /**
   * 创建礼包
   * @param data 礼包数据
   * @returns {Promise.<*>}
   */
  static async createPackage(data) {
    const url = `${this.baseUrl}/api/coupons/gift-bags`
    return await this.post(url, data)
  }

  /**
   * 修改礼包
   * @param id 礼包ID
   * @param data 礼包数据
   * @returns {Promise.<*>}
   */
  static async updatePackage(id, data) {
    const url = `${this.baseUrl}/api/coupons/gift-bags/${id}`
    return await this.put(url, data)
  }

  /**
   * 获取礼包列表
   * @param data {status: 状态}
   * @returns {Promise.<*>}
   */
  static async getPackageLists(data) {
    const url = `${this.baseUrl}/api/coupons/gift-bags`
    return await this.get(url, data)
  }

  /**
   * 商家获取礼包列表
   * @param data {status: 状态}
   * @returns {Promise.<*>}
   */
  static async getMerchantPackageLists(data) {
    const url = `${this.baseUrl}/api/coupons/gift-bag-list`
    return await this.get(url, data)
  }

  /**
   * 获取礼包详情
   * @param id 礼包ID
   * @returns {Promise.<void>}
   */
  static async getPackage(id) {
    const url = `${this.baseUrl}/api/coupons/gift-bags/${id}`
    return await this.get(url)
  }

  /**
   * 删除礼包
   * @param id 礼包ID
   * @returns {Promise.<*>}
   */
  static async deletePackage(id) {
    const url = `${this.baseUrl}/api/coupons/gift-bags/${id}`
    return await this.delete(url)
  }

  /**
   * 盟主审核商家报名
   * @param id 列表ID
   * @param data 审核结果
   * @returns {Promise.<*>}
   */
  static async applyCheckPackage(id, data) {
    const url = `${this.baseUrl}/api/coupons/apply-check/${id}`
    return await this.post(url, data)
  }

  /**
   * 商家申请报名
   * @param id 礼包ID
   * @param data 优惠券ID
   * @returns {Promise.<*>}
   */
  static async applyJoinPackage(id, data) {
    const url = `${this.baseUrl}/api/coupons/apply-join/${id}`
    return await this.post(url, data)
  }

  /**
   * 商家获取礼包详情
   * @param id
   * @returns {Promise.<*>}
   */
  static async getMerchantPackage(id) {
    const url = `${this.baseUrl}/api/coupons/gift-bag/${id}`
    return await this.get(url)
  }
}
