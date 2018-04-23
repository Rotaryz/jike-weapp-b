import wepy from 'wepy'
// ����༭ҳ��
const PICKERDEFAUFT = '��ѡ��'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '����ʱ��'
const TPLTIME = createTime()
const TPLPEOPLE = createPeople()
const NEW = '�½�'
const EDITOR = '�༭'
const PRICEDEFAULT = '0.0'
const MINSIZE = 0.1

function createTime() {
  let arr = []
  for (let i = 24; i > 0; i--) {
    if (i === 1 || i % 2 === 0) {
      arr.push(i + 'Сʱ')
    }
  }
  return arr
}

function createPeople() {
  let arr = []
  for (let i = 2; i < 6; i++) {
    arr.push(i + '��')
  }
  return arr
}

// �Ź���б�ҳ�� �� header-switch���
const UP = '0'
const DOWN = '1'
const UP = '2'
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
