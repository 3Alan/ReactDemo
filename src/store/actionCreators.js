import { ADD_TODO, DELETE_TODOITEM, INPUT_CHANGE, GET_TODOLIST } from './actionType';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: INPUT_CHANGE,
  value,
});

export const deleteTodoItemAction = (index) => ({
  type: DELETE_TODOITEM,
  index,
});

export const addTodoAction = (value) => ({
  type: ADD_TODO,
  value,
});

export const setTodoList = (list) => ({
  type: GET_TODOLIST,
  list,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8888/test/getTodoList')
    .then((res) => {
      const todoList = res.data.datas;
      const action = setTodoList(todoList);
      dispatch(action);
    });
  }
};