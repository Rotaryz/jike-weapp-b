/**
 * Created by user on 2018/4/20.
 */
import base from './base'
/**
 * 促销活动-分享赚钱
 */
export default class ShareMoney extends base {
  /**
   * 获取服务列表
   * @returns {Promise.<*>}
   */
  static async getshareserver() {
    const url = `${this.baseUrl}/api/act-share-money/goods-list`
    return await this.get(url)
  }
  /**
   * 获取服务列表
   * @param 创建分享赚钱活动
   * @returns {Promise.<*>}
   */
  static async createShareActive(data) {
    const url = `${this.baseUrl}/api/share-money`
    return await this.post(url, data)
  }
  /**
   * 获取服务列表
   * @param 获得分享赚钱活动
   * @returns {Promise.<*>}
   */
  static async getShareActiveList(type, page, limit = 10) {
    const url = `${this.baseUrl}/api/share-money`
    let data = {
      type,
      page,
      limit
    }
    return await this.get(url, data)
  }
}
