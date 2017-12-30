/**
 * Created by user on 2017/12/30.
 */
import base from './base'

export default class regist extends base {
  static async seeRegist() {
    const url = `${this.baseUrl}/api/activity/sign`
    return await this.get(url)
  }

  /**
   * 获取奖品池红包列表
   */
  static async Redpack() {
    const url = `${this.baseUrl}/api/redpackets/promotion`
    return await this.get(url)
  }
}
