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
   * 查询服务
   * @param data
   * @returns {Promise<void>}
   */
  static async getGroupActiveServerList(data) {
    const url = `${this.baseUrl}/api/group/search-coupons`
    return await this.get(url, data)
  }

}

// import {ERR_OK} from 'api/base'
// import URIS from 'common/js/config'
// import Tips from 'common/js/tips'
// import {UP} from 'api/group-active-config'
//
// // 假数据
// async function createWDM(data, type) {
//   Tips.loading()
//   sleep(200)
//   let arr = []
//   let len = data.limit
//   for (let i = 1; i <= len; i++) {
//     let id = (Math.random() * 100) >>> 0
//     let peopleNum = (Math.random() * 4 + 2) >>> 0
//     let price = (Math.random() * 250 + 20) >>> 0
//     let addNum = (Math.random() * 500 + 20) >>> 0
//     let flag = arr.some(val => val.id === id)
//     if (flag) {
//       continue
//     }
//     arr.push({
//       id,
//       src: URIS.image + '/defaults/b-image/mine/pic-popup@2x.png',
//       peopleNum,
//       hotName: '尊宝披萨周年庆套餐' + id,
//       price,
//       hotPrice: price - ((Math.random() * 20 + 1) >>> 0),
//       status: type === UP ? '已上线' : '过期了',
//       statusType: type,
//       serverType: '100元代120元代金券' + id,
//       addNum,
//       hotEndDate: `2018-${(Math.random() * 12 + 1) >>> 0}-10`,
//       timeLimit: i % 2 === 0 ? i : 1,
//       inventory: (Math.random() * 500 + 100) >>> 0
//     })
//   }
//
//   return await {data: arr, error: ERR_OK, message: '500服务器请求错误', status: 'success', meta: {total: 30}}
// }
//
// function sleep(numberMillis) {
//   var now = new Date()
//   var exitTime = now.getTime() + numberMillis
//   while (true) {
//     now = new Date()
//     if (now.getTime() > exitTime) return
//   }
// }
