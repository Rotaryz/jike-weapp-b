import wepy from 'wepy'
import Tips from 'common/js/tips'
import bargain from 'api/bargain'

export default class base extends wepy.mixin {
  loaded() {
    this.init = true
    this.$apply()
    Tips.loaded()
  }

  // 分享
  ShareAppMessage() {
    return {
      title: '集客商家助手',
      path: `/pages/loading/loading`,
      success: async () => {
        // 转发成功
      },
      fail: (res) => {
        // 转发失败
        console.log(res)
      }
    }
  }
//    新建时获取开始时间
  async getBeginTimes() {
    let res = await bargain.getDate()
    this.loaded()
    return res.data.date
  }
  // 卸载清理
  onUnload() {
    Object.assign(this, this.def)
  }

  methods = {
    nopen() {
      Tips.alert('尚未开放')
    }
  }
}
