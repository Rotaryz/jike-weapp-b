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
   * @returns {Promise.<*>}
   */
  static async getshareserver(data, loading = true) {
    const url = `${this.baseUrl}/api/act-share-money/goods-list`
    return await this.get(url, data, loading)
  }
  /**
   * 创建分享赚钱活动
   * @param
   * @returns {Promise.<*>}
   */
  static async createShareActive(data) {
    const url = `${this.baseUrl}/api/share-money`
    return await this.post(url, data)
  }
  /**
   * 获得分享赚钱活动
   * @param status 类型 data 分页和页数
   * @returns {Promise.<*>}
   */
  static async getShareActiveList(status, data, loading = true) {
    const url = `${this.baseUrl}/api/share-money?type=${status}`
    return await this.get(url, data, loading)
  }
  /**
   * 更换上线状态
   * @param id
   * @returns {Promise.<*>}
   */
  static async onlineShareActive(id, status = 1, loading = true) {
    const url = `${this.baseUrl}/api/act-share-money/update-status/${id}`
    let data = {
      status
    }
    return await this.post(url, data, loading)
  }
  /**
   * 更换下线状态
   * @param  id
   * @returns {Promise.<*>}
   */
  static async offlineShareActive(id, status = 0, loading = true) {
    const url = `${this.baseUrl}/api/act-share-money/update-status/${id}`
    let data = {
      status
    }
    return await this.post(url, data, loading)
  }
  /**
   * 删除服务
   * @param
   * @returns {Promise.<*>}
   */
  static async deleteShareActive(id, loading = true) {
    const url = `${this.baseUrl}/api/share-money/${id}`
    return await this.delete(url, loading)
  }
  /**
   * 获取服务详情
   * @param  id
   * @returns {Promise.<*>}
   */
  static async getServerDetail(id) {
    const url = `${this.baseUrl}/api/share-money/${id}`
    return await this.get(url)
  }
  /**
   * 获取服务商品详情
   * @param  id
   * @returns {Promise.<*>}
   */
  static async getServerShopDetail(id) {
    const url = `${this.baseUrl}/api/act-share-money/promotion-info/${id}`
    return await this.get(url)
  }
  /**
   * 编辑分享赚钱活动
   * @param  id
   * @returns {Promise.<*>}
   */
  static async SaveServerDetails(id, data) {
    const url = `${this.baseUrl}/api/share-money/${id}`
    return await this.put(url, data)
  }

  /**
   * 修改活动状态总开关-分享
   * @param id
   * @returns {Promise<void>}
   */
  static async changeActiveStatus(data, loading = true) {
    const url = `${this.baseUrl}/api/group/activity-status`
    return await this.get(url, data, loading)
  }
}
