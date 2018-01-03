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
    Tips.loaded()
    if (this.isSuccess(res)) {
      const result = res.data.data ? res.data.data : res.data
      return result
    } else {
      throw this.requestException(res)
    }
  }

  static async update(url, name, loading = true) {
    const resImage = await wepy.chooseImage()
    const token = wepy.getStorageSync('token')
    const param = {
      url: url,
      filePath: resImage.tempFilePaths[0],
      name: name,
      formData: {
        jk_token: token
      }
    }
    const Authorization = wepy.getStorageSync('token')
    if (Authorization) {
      param.header = Object.assign({}, {Authorization})
    }
    param.header = Object.assign({}, param.header, {'Current-merchant': 100000})
    if (loading) {
      Tips.loading()
    }
    const res = await wepy.uploadFile(param)
    const resData = JSON.parse(res.data)
    Tips.loaded()
    if (res.statusCode === 200 && resData.error === 0) {
      return resData
    } else {
      throw this.requestException(resData)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    // 微信请求错误
    if (wxCode === 200 || wxCode === 422) {
      return true
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
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  /**
   * 上传文件
   */
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

  static async isLogin(msg) {
    if (msg === '凭证已失效') {
      await wepy.navigateTo({
        url: '../logIn/logIn'
      })
    }

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

  static updateImg(url, name, loading = true) {
    return this.update(url, name, loading)
  }
}
