import { ADD_TODO, DELETE_TODOITEM, INPUT_CHANGE, GET_TODOLIST } from './actionType';

const defaultState = {
  todoText: '',
  todoList: []
};

export default (state = defaultState, action) => {
  if (action.type === ADD_TODO) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(action.value);
    newState.todoText = '';
    return newState;
  }
  if (action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoText = action.value;
    return newState;
  }
  if (action.type === DELETE_TODOITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_TODOLIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.list;
    return newState;
  }
  return state;
}