const mocked = {
    "": [{ key: '1' }, { key: '2' }],
    '1': [{ key: '1.doc' }, { key: '1.jpg' }, { key: '4' }],
    '2': [
        { key: '2.png' },
        { key: '3' },
        { key: '2.doc' },
        { key: '2.jpg' },
        { key: '5' }
    ],
    '3': [{ key: '3.png' }, { key: '3.doc' }, { key: '3.jpg' }],
    '4': [{ key: '4.png' }],
    '5': [{ key: '5.png' }, { key: '6' }],
    '6': [{ key: '6.png' }, { key: '6.doc' }, { key: '6.jpg' }]
}

module.exports = {
    'ls': (path) => mocked[path]
} 