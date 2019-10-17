import path from 'path'
import fs from 'fs'
const fetch = require('node-fetch')

var shell = require('shelljs')

const mocked = {
  Colleges: [{ name: '1' }, { name: '2' }, { name: '0.pdf' }],
  'Colleges/1': [{ name: '1.doc' }, { name: '1.jpg' }, { name: '4' }],
  'Colleges/2': [
    { name: '2.png' },
    { name: '3' },
    { name: '2.doc' },
    { name: '2.jpg' },
    { name: '5' }
  ],
  'Colleges/2/3': [{ name: '3.png' }, { name: '3.doc' }, { name: '3.jpg' }],
  'Colleges/1/4': [{ name: '4.png' }],
  'Colleges/2/5': [{ name: '5.png' }, { name: '6' }],
  'Colleges/2/5/6': [{ name: '6.png' }, { name: '6.doc' }, { name: '6.jpg' }]
}
function resolver (cb, fullPath) {
  return cb(mocked[fullPath])
}
module.exports = {
  ls: function (fullPath) {
    switch (fullPath) {
      case 'Colleges':
        return fetch('http://localhost:1337/colleges').then(res => res.json())

      default:
        return new Promise(resolve =>
          setTimeout(() => resolver(resolve, fullPath), 400)
        )
    }
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
