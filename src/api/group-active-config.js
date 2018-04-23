import wepy from 'wepy'
// 团购编辑页面
const PICKERDEFAUFT = '请选择'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '结束时间'
const TPLTIME = createTime() // picker时间模板
const TPLPEOPLE = createPeople() // picker人数模板
const NEW = '新建'
const EDITOR = '编辑'
const PRICEDEFAULT = '0.0'
const MINSIZE = 0.1
const STOCKUNLIMIT = -1 // 库存无限制的值
const HTOENDSTAMP = ' 23:59:59'

// picker时间模板
function createTime() {
  let arr = []
  for (let i = 24; i > 0; i--) {
    if (i === 1 || i % 2 === 0) {
      arr.push(i + '小时')
    }
  }
  return arr
}

// picker人数模板
function createPeople() {
  let arr = []
  for (let i = 2; i < 6; i++) {
    arr.push(i + '人')
  }
  return arr
}

// 团购活动列表页面 和 header-switch组件
const UP = '1' // 已上线
const DOWN = '0' // 已下线
const OUT = '0' // 过期 0表示商品已下架，删除，过期 1表示正常
const NORMAL = '1'
const ON = 'on' // 开关-开
const OFF = 'off' // 开关-关
const UPPAGELIMIT = 10  // 上线状态的每页查询数量
const DOWNPAGELIMIT = 10 // 下线状态的每页查询数量
const SUCCESS = 'success' // 按钮显示

/**
 * 获取设备尺寸
 * @returns {{width: *, height: *}}
 */
function getDeviceInfo() {
  const res = wepy.getSystemInfoSync()
  const width = res.windowWidth
  const height = res.windowHeight
  return {width, height}
}

const DEVICEINFO = getDeviceInfo()

export {
  PICKERDEFAUFT,
  INPUTDEFAULT,
  HOTENDDEFAULT,
  TPLTIME,
  TPLPEOPLE,
  PRICEDEFAULT,
  NEW,
  EDITOR,
  UP,
  DOWN,
  ON,
  OFF,
  DEVICEINFO,
  UPPAGELIMIT,
  DOWNPAGELIMIT,
  SUCCESS,
  MINSIZE,
  STOCKUNLIMIT,
  HTOENDSTAMP,
  OUT,
  NORMAL
}
