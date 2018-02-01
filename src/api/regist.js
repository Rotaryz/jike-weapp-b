/**
 * Created by user on 2017/12/30.
 */
import base from './base'
/**
 * 查看奖品池红包列表
 */
export default class regist extends base {
  static async seeRegist() {
    const url = `${this.baseUrl}/api/activity/sign`
    return await this.get(url)
  }

  /**
   * 获取奖品池红包列表
   */
  static async Redpack() {
    const url = `${this.baseUrl}/api/redpackets/promotion?per_page=0`
    return await this.get(url)
  }

  /**
   * 获取门店信息
   * @returns {Promise.<*>}
   * @constructor
   */
  static async getData() {
    const url = `${this.baseUrl}/api/merchants/get-data`
    return await this.get(url)
  }

  /**
   * 创建红包
   * @returns {Promise.<*>}
   */
  static async createData(data) {
    const url = `${this.baseUrl}/api/activity/sign`
    return await this.post(url, data)
  }

  /**
   * 编辑签到红包
   * @param data
   * @returns {Promise.<*>}
   */
  static async putData(id, data) {
    const url = `${this.baseUrl}/api/activity/sign/${id}`
    return await this.put(url, data)
  }
}
