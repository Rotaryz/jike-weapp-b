/**
 *  团购活动接口
 */
import base from './base'

export default class GroupActive extends base {
  /**
   * 团购列表
   * @param status 1 已上线 2已下线
   * @param data
   * @returns {Promise<void>}
   */
  static async getGroupActiveList(data, status) {
    const url = `${this.baseUrl}/api/group/tuan-gou?status=${status}`
    return await this.get(url, data)
  }

  /**
   * 查询服务-团购
   * @param data
   * @returns {Promise<void>}
   */
  static async getGroupActiveServerList(data) {
    const url = `${this.baseUrl}/api/group/search-coupons`
    return await this.get(url, data)
  }

  /**
   * 创建团购活动
   * @param data
   * @returns {Promise<void>}
   */
  static async createGroupActive(data) {
    const url = `${this.baseUrl}/api/group/tuan-gou`
    return await this.post(url, data)
  }

  /**
   * 更新团购活动
   * @param data
   * @returns {Promise<void>}
   */
  static async updateGroupActive(data, id) {
    const url = `${this.baseUrl}/api/group/tuan-gou/${id}`
    return await this.put(url, data)
  }

  /**
   * 下线团购活动
   * @param id
   * @returns {Promise<void>}
   */
  static async offlineGroupActive(id) {
    const url = `${this.baseUrl}/api/group/offline/${id}`
    return await this.get(url)
  }

  /**
   * 上线团购活动
   * @param id
   * @returns {Promise<void>}
   */
  static async onlineGroupActive(id) {
    const url = `${this.baseUrl}/api/group/online/${id}`
    return await this.get(url)
  }

  /**
   * 删除团购
   * @param id
   * @returns {Promise<void>}
   */
  static async deleteGroupActive(id) {
    const url = `${this.baseUrl}/api/group/tuan-gou/${id}`
    return await this.delete(url)
  }

  /**
   * 修改活动状态总开关-团购
   * @param id
   * @returns {Promise<void>}
   */
  static async changeActiveStatus(data, loading = true) {
    const url = `${this.baseUrl}/api/group/activity-status`
    return await this.get(url, data, loading)
  }

  /**
   * 查询活动状态
   * @param data
   * @param loading
   * @returns {Promise<void>}
   */
  static async showActiveStatus(data, loading = true) {
    const url = `${this.baseUrl}/api/group/show-status`
    return await this.get(url, data, loading)
  }
}

