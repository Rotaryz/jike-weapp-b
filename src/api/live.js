/**
 * Created by user on 2017/12/29.
 */
import base from './base'

export default class live extends base {
  /**
   * 新建直播
   * @param data
   * @returns {Promise.<*>}
   */
  static async createlive(data) {
    const url = `${this.baseUrl}/api/activity/live`
    return await this.post(url, data)
  }

  /**
   * 新建直播
   * @param data
   * @returns {Promise.<*>}
   */
  static async putlive(id, data) {
    const url = `${this.baseUrl}/api/activity/live/${id}`
    return await this.put(url, data)
  }

  /**
   * 奖品池优惠券
   * @param data
   * @returns {Promise.<*>}
   */
  static async prizePool(data) {
    const url = `${this.baseUrl}/api/activity/prize-pool`
    return await this.get(url, data)
  }

  /**
   * 新建直播
   * @param data
   * @returns {Promise.<*>}
   */
  static async watchlive() {
    const url = `${this.baseUrl}/api/activity/live`
    return await this.get(url)
  }
}
