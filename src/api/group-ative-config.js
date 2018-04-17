const PICKERDEFAUFT = '请选择'
const INPUTDEFAULT = ''
const HOTENDDEFAULT = '结束时间'
const TPLTIME = createTime()
const TPLPEOPLE = createPeople()
const NEW = '新建'
const EDITOR = '编辑'

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

export {
  PICKERDEFAUFT,
  INPUTDEFAULT,
  HOTENDDEFAULT,
  TPLTIME,
  TPLPEOPLE,
  NEW,
  EDITOR
}
