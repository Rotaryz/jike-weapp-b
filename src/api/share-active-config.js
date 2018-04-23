import wepy from 'wepy'
// 分享编辑页面
const PICKERDEFAUFT = '请选择'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '结束时间'
const TPLTIME = createTime()
const TPLPEOPLE = createPeople()
const NEW = '新建'
const EDITOR = '编辑'
const PRICEDEFAULT = '0.0'
const MINSIZE = 0.1

function createTime() {
  let arr = []
  for (let i = 24; i > 0; i--) {
    if (i === 1 || i % 2 === 0) {
      arr.push(i + '小时')
    }
  }
  return arr
}

function createPeople() {
  let arr = []
  for (let i = 2; i < 6; i++) {
    arr.push(i + '人')
  }
  return arr
}

// 团购活动列表页面 和 header-switch组件
const UP = '0'
const DOWN = '1'
const ON = 'on'
const OFF = 'off'
const UPPAGELIMIT = 10
const DOWNPAGELIMIT = 10
const SUCCESS = 'success'

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
  MINSIZE
}
