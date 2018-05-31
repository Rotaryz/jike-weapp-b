/**
 * Created by zx on 2018/5/22.
 */
import base from './base'
export default class bargain extends base {
  /**
   * 获取砍价列表
   * @returns {Promise.<*>}
   */
  static async getBargainServer(data, loading = true) {
    const url = `${this.baseUrl}/api/bargain/search-coupons`
    return await this.get(url, data, loading)
  }
  /**
   * 获取服务器时间
   * @returns {Promise.<*>}
   */
  static async getDate(data, loading = true) {
    const url = `${this.baseUrl}/api/bargain/get-date`
    return await this.get(url, data, loading)
  }
  /**
   * 新建活动
   * @returns {Promise.<*>}
   */
  static async activityBargain(data, loading = true) {
    const url = `${this.baseUrl}/api/bargain/activity-bargain`
    return await this.post(url, data, loading)
  }
  /**
   * 编辑活动
   * @returns {Promise.<*>}
   */
  static async putActivityBargain(id, data, loading = true) {
    const url = `${this.baseUrl}/api/bargain/activity-bargain/${id}`
    return await this.put(url, data, loading)
  }
  /**
   * 获取活动列表
   * @returns {Promise.<*>}
   */
  static async activityBargainList(data, loading = true) {
    const url = `${this.baseUrl}/api/bargain/activity-bargain`
    return await this.get(url, data, loading)
  }
  /**
   * 获取活动详情
   * @returns {Promise.<*>}
   */
  static async activityBargainDetail(id, loading = true) {
    const url = `${this.baseUrl}/api/bargain/activity-bargain/${id}`
    return await this.get(url, loading)
  }
  /**
   * 删除活动
   * @returns {Promise.<*>}
   */
  static async delActivityBargain(id, loading = true) {
    const url = `${this.baseUrl}/api/bargain/activity-bargain/${id}`
    return await this.delete(url, loading)
  }
  /**
   * 下线活动
   * @returns {Promise.<*>}
   */
  static async downActivityBargain(id, loading = true) {
    const url = `${this.baseUrl}/api/bargain/offline/${id}`
    return await this.get(url, loading)
  }
  /**
   * 上线活动
   * @returns {Promise.<*>}
   */
  static async upActivityBargain(id, loading = true) {
    const url = `${this.baseUrl}/api/bargain/online/${id}`
    return await this.get(url, loading)
  }
}
