import path from 'path'
import fs from 'fs'
var shell = require('shelljs')

const mocked = {
  Colleges: [{ key: '1' }, { key: '2' }, { key: '0.pdf' }],
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
function resolver (cb, fullPath) {
  return cb(mocked[fullPath])
}
module.exports = {
  ls: function (fullPath) {
    return new Promise(resolve =>
      setTimeout(() => resolver(resolve, fullPath), 400)
    )
  },
  getFile: function (fullPath) {
    console.log('getting file ')
    return new Promise((resolve, reject) => {
      let writePath = path.join(process.cwd(), fullPath)
      console.log('writePath')
      console.log(JSON.stringify(writePath))
      shell.mkdir('-p', path.dirname(writePath))
      let cont = `content for fullPath: ${fullPath}, with writePath: ${writePath}`
      fs.writeFile(writePath, cont, function (err, res) {
        console.log('read file err 3333333 ')
        console.log(err)
        if (err) return reject(err)
        console.log('read file res 3333333 ')
        console.log(res)
        // TODO: handle error
        return resolve({ writePath, fullPath })
      })
    })
  }
}
