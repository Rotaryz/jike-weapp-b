/**
 * Created by user on 2017/12/21.
 */
import base from './base'
export default class shop extends base {
  /**
   * 输码核销
   * @param data
   * @returns {Promise.<*>}
   */
  static async verification(data) {
    const url = `${this.baseUrl}/api/coupons/verification/${data}`
    console.log(url)
    return await this.get(url)
  }
}
