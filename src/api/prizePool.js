import base from './base'

export default class PrizePool extends base {
  /**
   * 获取奖品池
   * @param
   * @returns {Promise.<*>}
   */
  static async getPrizelist(status = 1, type = 1) {
    const url = `${this.baseUrl}/api/activity/prize-pool`
    let data = {
      use_status: status,
      use_type: type
    }
    return await this.get(url, data)
  }
}
