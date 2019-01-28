import { handleActions } from 'redux-actions';
import actions from '../actions/file';

const fetched = {
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
    '5': [{ key: '5.png' }, { key: '5.doc' }, { key: '5.jpg' }]
}

export default handleActions(
    {
        [actions.fetch]: (state, action) => {
            return { ...state, ...action.payload };
        },
        [actions.list]: (state, action) => {
            var path = action.payload
            console.log("path ...")
            console.log(path)
            return { ...state, fetched: fetched[path] };
        }
    },
    {},
);

