const mocked = {
  '/': [{ key: '1' }, { key: '2' }],
  '/1': [{ key: '1.doc' }, { key: '1.jpg' }, { key: '4' }],
  '/2': [
    { key: '2.png' },
    { key: '3' },
    { key: '2.doc' },
    { key: '2.jpg' },
    { key: '5' }
  ],
  '/2/3': [{ key: '3.png' }, { key: '3.doc' }, { key: '3.jpg' }],
  '/1/4': [{ key: '4.png' }],
  '/2/5': [{ key: '5.png' }, { key: '6' }],
  '/2/5/6': [{ key: '6.png' }, { key: '6.doc' }, { key: '6.jpg' }]
}

async function timeout (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function sleep (fn, ...args) {
  await timeout(3000)
  return fn(...args)
}

module.exports = {
  ls: async function (path) {
    var res_await_promose = await Promise.all([
      sleep(path => mocked[path], path)
    ])
    JSON.stringify("res_await_promose **************************")
    JSON.stringify(res_await_promose)
    return res_await_promose
  }
}
