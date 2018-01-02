import base from './base'

export default class Activitys extends base {
  /**
   * 获取奖品池列表
   * @returns {Promise.<*>}
   */
  static async getPrizePool() {
    const url = `${this.baseUrl}/api/activity/prize-pool`
    return await this.get(url)
  }

  /**
   * 查看大转盘详情
   * @returns {Promise.<*>}
   */
  static async getLucky(loading) {
    const url = `${this.baseUrl}/api/activity/lucky`
    return await this.get(url, '', loading)
  }

  /**
   * 添加大转盘活动
   * @param data 大转盘数据
   * @returns {Promise.<*>}
   */
  static async addLucky(data) {
    const url = `${this.baseUrl}/api/activity/lucky`
    return await this.post(url, data)
  }

  /**
   * 修改大转盘活动
   * @param id 大转盘Id
   * @param data 大转盘数据
   * @returns {Promise.<*>}
   */
  static async updateLucky(id, data) {
    const url = `${this.baseUrl}/api/activity/lucky/${id}`
    return await this.put(url, data)
  }
}
