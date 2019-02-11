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
function resolver(cb, path) {
  console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooo")
  return cb(mocked[path])
}
module.exports = {
  ls: function (path) {
    return new Promise(resolve => setTimeout(() => resolver(resolve, path), 500))
  }
}
