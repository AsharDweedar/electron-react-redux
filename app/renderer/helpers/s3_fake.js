const mocked = {
  'Colleges': [{ key: '1' }, { key: '2' }],
  'Colleges/1': [{ key: '1.doc' }, { key: '1.jpg' }, { key: '4' }],
  'Colleges/2': [
    { key: '2.png' },
    { key: '3' },
    { key: '2.doc' },
    { key: '2.jpg' },
    { key: '5' }
  ],
  'Colleges/2/3': [{ key: '3.png' }, { key: '3.doc' }, { key: '3.jpg' }],
  'Colleges/1/4': [{ key: '4.png' }],
  'Colleges/2/5': [{ key: '5.png' }, { key: '6' }],
  'Colleges/2/5/6': [{ key: '6.png' }, { key: '6.doc' }, { key: '6.jpg' }]
}
function resolver(cb, fullPath) {
  return cb(mocked[fullPath])
}
module.exports = {
  ls: function (fullPath) {
    return new Promise(resolve => setTimeout(() => resolver(resolve, fullPath), 500))
  },
  getFile: function (fullPath) {
    return new Promise(resolve => setTimeout(() => resolver(resolve, `content for fullPath: ${fullPath}`), 500))
  }
}
