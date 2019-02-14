module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: '3.0'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    ['react-css-modules'],
    [
      'import-static-files',
      {
        baseDir: '/static',
        hash: false,
        extensions: ['.gif', '.jpeg', '.jpg', '.png', '.svg'],
        srcDir: '',
        outDir: ''
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
