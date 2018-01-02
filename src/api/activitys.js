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
  /**
   * 获取分享活动列表
   * @param
   * @returns {Promise.<*>}
   */
  static async getShareList() {
    const url = `${this.baseUrl}/api/activity/share`
    return await this.get(url)
  }
  /**
   * 关闭分享活动
   * @param
   * @returns {Promise.<*>}
   */
  static async ActivityClose(id) {
    const url = `${this.baseUrl}/api/activity/close-share`
    let data = {
      id
    }
    return await this.get(url, data)
  }
  /**
   * 新增活动
   * @param
   * @returns {Promise.<*>}
   */
  static async newActivity(data) {
    const url = `${this.baseUrl}/api/activity/share`
    return await this.post(url, data)
  }
  /**
   * 修改活动
   * @param id 活动id
   * @returns {Promise.<*>}
   */
  static async chengeActivity(data, id) {
    const url = `${this.baseUrl}/api/activity/share/${id}`
    return await this.put(url, data)
  }
  /**
   * 活动总览
   * @param
   * @returns {Promise.<*>}
   */
  static async getAllActivity() {
    const url = `${this.baseUrl}/api/activity/show-status`
    return await this.get(url)
  }
  /**
   * 开启关闭活动
   * @param
   * @returns {Promise.<*>}
   */
  static async switchActivity(data) {
    const url = `${this.baseUrl}/api/activity/change-status`
    return await this.get(url, data)
  }
}
