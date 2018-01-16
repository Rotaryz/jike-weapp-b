import wepy from 'wepy'
import Tips from './tips'

// HTTP工具类
export default class http {
  static async request(method, url, data, loading = true) {
    const param = {
      url: url,
      method: method,
      data: data
    }
    const Authorization = wepy.getStorageSync('token')
    if (Authorization) {
      param.header = Object.assign({}, {Authorization}, {'X-Requested-With': 'XMLHttpRequest'})
    }
    if (loading) {
      Tips.loading()
    }
    const res = await wepy.request(param)
    if (this.isSuccess(res)) {
      const result = res.data.data ? res.data.data : res.data
      return result
    } else if (this.isLoseEfficacy(res)) {
      wepy.navigateTo({
        url: '/pages/logIn/logIn'
      })
      throw res.data
    } else {
      throw this.requestException(res)
    }
  }

  static async upload(url, data, name = 'file', loading = true) {
    const param = {
      url: url,
      filePath: data,
      name: name
    }
    const Authorization = wepy.getStorageSync('token')
    param.header = Object.assign({}, {Authorization})
    if (loading) {
      Tips.loading()
    }
    const res = await wepy.uploadFile(param)
    const resData = JSON.parse(res.data)
    Tips.loaded()
    if (resData.status_code === 200 && resData.error === 0) {
      return resData.data
    } else {
      throw this.requestException(resData)
    }
  }

  /**
   * 判断是否登录
   * @param msg
   * @returns {Promise.<void>}
   */
  static async isLogin(msg) {
    if (msg === '凭证已失效') {
      await wepy.navigateTo({
        url: '../logIn/logIn'
      })
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode === 200 || wxCode === 422) {
      const wxData = res.data
      return wxData && wxData.error === 0
    }
    return false
  }

  static isLoseEfficacy(res) {
    const wxCode = res.statusCode
    if (wxCode === 200) {
      const json = res.data
      return json.status_code === 500 && json.error === 1 && json.message === '凭证已失效'
    }
    return false
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    if (wxData) {
      error.error = wxData.error
      error.message = wxData.message
      error.serverData = wxData
      Tips.error(wxData.message)
    } else {
      Tips.loaded()
    }
    return error
  }

  static get(url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static put(url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }

  static post(url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }

  static patch(url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }

  static delete(url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
