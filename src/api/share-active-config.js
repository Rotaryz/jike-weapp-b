import wepy from 'wepy'
// ����༭ҳ��
const PICKERDEFAUFT = '请输入'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '请输入'
const NEW = '新建'
const EDITOR = '编辑'
const PRICEDEFAULT = '0.0'
const MINSIZE = 0.1

// �Ź���б�ҳ�� �� header-switch���
const UP = '0'
const DOWN = '1'
const ON = 'on'
const OFF = 'off'
const UPPAGELIMIT = 10
const DOWNPAGELIMIT = 10
const SUCCESS = 'success'

/**
 * ��ȡ�豸�ߴ�
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
