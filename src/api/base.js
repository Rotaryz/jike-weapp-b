import wepy from 'wepy'
import http from 'common/js/http'

export default class base {
  static baseUrl = wepy.$instance.globalData.baseUrl
  static baseLogin = wepy.$instance.globalData.baseLogin
  static get = http.get.bind(http)
  static put = http.put.bind(http)
  static post = http.post.bind(http)
  static delete = http.delete.bind(http)
  static updateImg = http.updateImg.bind(http)
  static upload = http.upload.bind(http)
}
