// 研发站：
// 图片地址     https://img.jerryf.cn
//   单点登录地址  https://dev.jike-jwt.jerryf.cn
//   B端api地址   https://dev.jike-backend-api.jerryf.cn
//   C端api地址   https://dev.jike-wap-api.jerryf.cn
//
//   测试站
// 图片地址     https://img.jkweixin.net
//   单点登录地址  https://jwt.jkweixin.net
//   B端api地址   https://backend-api.jkweixin.net
//   C端api地址   https://wap-api.jkweixin.net
//
//   正式站
// 图片地址     https://img.jkweixin.com
//   单点登录地址  https://jwt.jkweixin.com
//   B端api地址   https://backend-api.jkweixin.com
//   C端api地址   https://wap-api.jkweixin.com

const version = '/v2'

/**
 * 研发环境
 * @type {{image: string, login: string, api: string}}
 */
// const URLS = {
//   image: 'https://img.jerryf.cn',
//   login: 'https://dev.jike-jwt.jerryf.cn',
//   api: 'https://dev.jike-backend-api.jerryf.cn' + version,
//   jumpVersion: 'develop'
// }

/**
 * 测试环境
 * @type {{image: string, login: string, api: string}}
 */
// const URLS = {
//   image: 'https://img.jkweixin.net',
//   login: 'https://jwt.jkweixin.net',
//   api: 'https://backend-api.jkweixin.net' + version,
//   jumpVersion: 'trial'
// }

/**
 * 生产环境
 * @type {{image: string, login: string, api: string}}
 */
const URLS = {
  image: 'https://img.jkweixin.com',
  login: 'https://jwt.jkweixin.com',
  api: 'https://backend-api.jkweixin.com' + version,
  jumpVersion: 'release'
}

class URIS {
  constructor() {
    this.image = URLS.image
    this.login = URLS.login
    this.api = URLS.api
    this.jumpVersion = URLS.jumpVersion
  }
}

export default new URIS()
