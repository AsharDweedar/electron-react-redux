import { handleActions } from 'redux-actions';
import actions from '../actions/file';
import * as s3 from '../helpers/s3_fake'

export default handleActions(
    {
        [actions.fetch]: (state, action) => {
            console.log("fetching ....................")
            var path = action.payload
            var list = s3.ls(path)
            return { ...state, fetched: { ...state["fetched"], [path]: list, fetched_paths: (state["fetched"]["fetched_paths"] || []).concat([path])} };
        },
        [actions.reset]: (state, action) => {
            return { ...state, ...action.payload };
        }
    },
    {fetched: {fetched_paths: [], hi: "hello"}},
);

