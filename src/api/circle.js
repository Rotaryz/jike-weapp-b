/**
 * Created by user on 2018/3/14.
 */
import base from './base'
export default class circles extends base {
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
    const url = `${this.baseUrl}/api/circle/circle-share-merchants`
    return await this.get(url, data)
  }
}
