import wepy from 'wepy'
import Tips from './tips'

// HTTP工具类
export default class http {
  static async request (method, url, data, loading = true) {
    const param = {
      url: url,
      method: method,
      data: data
    }
    const Authorization = wepy.getStorageSync('token')
    param.header = Object.assign({}, {'X-Requested-With': 'XMLHttpRequest'})
    if (Authorization) {
      param.header = Object.assign(param.header, {Authorization})
    }
    if (loading) {
      Tips.loading()
    }
    const res = await wepy.request(param)
    if (this.isLoseEfficacy(res)) {
      wepy.redirectTo({
        url: '/pages/logIn/logIn'
      })
      throw res.data
    } else if (this.isError(res)) {
      let status = this.isError(res)
      wepy.redirectTo({url: `/pages/error/error?status=${status}`})
    } else if (this.isSuccess(res)) {
      const result = res.data
      return result
    } else {
      throw this.requestException(res)
    }
  }

  static async upload (url, data, name = 'file', loading = true) {
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
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if ((wxCode === 200 && res.data.code === 0) || wxCode === 422) {
      return true
    }
    return false
  }

  static isLoseEfficacy (res) {
    const wxCode = res.statusCode
    if (wxCode === 200) {
      const json = res.data
      return json.code === 10000
    }
    return false
  }

  /**
   * 异常页面
   * @param res
   */
  static isError (res) {
    const wxCode = res.statusCode
    if (wxCode === 404) {
      return 1
    } else if (wxCode >= 500) {
      return 2
    }
    return 0
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    if (wxData) {
      error.error = wxData.error
      error.message = wxData.message
      error.serverData = wxData
    } else {
      Tips.loaded()
    }
    return error
  }

  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }

  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }

  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }

  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
