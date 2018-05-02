import wepy from 'wepy'
const PICKERDEFAUFT = '请输入'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '请输入'
const NEW = '新建'
const EDITOR = '编辑'
const PRICEDEFAULT = '0.0'
const MINSIZE = 0.1

const UP = '1'
const DOWN = '0'
const OUT = '0'
const DEL = '3'
const TAKENOFF = '4'
const ON = 'on'
const OFF = 'off'
const UPPAGELIMIT = 10
const DOWNPAGELIMIT = 10
const SUCCESS = 'success'

/**
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
  PRICEDEFAULT,
  NEW,
  EDITOR,
  DEL,
  UP,
  DOWN,
  TAKENOFF,
  ON,
  OUT,
  OFF,
  DEVICEINFO,
  UPPAGELIMIT,
  DOWNPAGELIMIT,
  SUCCESS,
  MINSIZE
}
