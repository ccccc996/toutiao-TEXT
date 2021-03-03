// 封装本地存储操作

// 存数据
export const setItem = (key, value) => {
  // 先将数据转换为 JSON 格式字符串在存储在 token 中
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 取数据
export const getItem = value => {
  // 获取数据  由于 json格式的字符串不好判断，所以直接调用，能够使用JSON.parse 就直接使用 不能使用则直接return data
  const data = localStorage.getItem(value)
  try {
    JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 删除数据
export const removeItem = key => {
  localStorage.removeItem(key)
}
