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
   * @param data
   * @returns {Promise.<*>}
   */
  static async getshareserver() {
    const url = `${this.baseUrl}/api/act-share-money/goods-list`
    return await this.get(url)
  }
}
