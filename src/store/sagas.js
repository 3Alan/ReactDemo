import { takeEvery } from 'redux-saga/effects';
import { GET_SAGA } from './actionType';

function* getList() {
  console.log('进行异步操作了');
}

function* mySaga(action) {
  // 当dispatch的action.type = GET_SAGA时，调用getList方法
  yield takeEvery(GET_SAGA, getList);
}

export default mySaga;
