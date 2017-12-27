import base from './base'

export default class PrizePool extends base {
  /**
   * 获取奖品池
   * @param
   * @returns {Promise.<*>}
   */
  static async getPrizelist() {
    const url = `${this.baseUrl}/api/activity/prize-pool`
    return await this.get(url)
  }

}
