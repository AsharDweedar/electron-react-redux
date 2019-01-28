import { createAction } from 'redux-actions';

export default {
  fetch: createAction('FILE_FETCH'),
  list: createAction('FILE_LIST')
};
