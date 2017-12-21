/**
 * Created by user on 2017/12/20.
 */
import base from './base'
export default class logIn extends base {
  /**
   * 商家登陆
   * @param 用户信息
   * @returns {Promise.<*>}
   */
  static async login(data) {
    const url = `${this.baseLogin}/api/merchants/login`
    return await this.post(url, data)
  }

  /**
   * 获取手机验证码
   * @param 手机号码
   * @returns {Promise.<*>}
   */
  static async messageBind(data) {
    const url = `${this.baseLogin}/api/merchants/message-bind`
    return await this.post(url, data)
  }

  /**
   * 商家注册
   * @param data
   * @returns {Promise.<*>}
   */
  static async register(data) {
    const url = `${this.baseLogin}/api/merchants/register`
    return await this.post(url, data)
  }

}
