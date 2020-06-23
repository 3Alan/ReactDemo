import React, { Component } from 'react';
import store from '../../store';
import {
  changeInputAction,
  addTodoAction,
  deleteTodoItemAction,
  getTodoList,
  getSaga,
} from '../../store/actionCreators';
import AntdReduxUi from './antdReduxUi';
import { connect } from 'react-redux';

class AntdDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.storeChange = this.storeChange.bind(this);
    // store.subscribe(this.storeChange);
  }
  render() {
    const {
      addTodo,
      todoText,
      todoList,
      deleteTodoItem,
      inputChange,
    } = this.props;
    return (
      <AntdReduxUi
        addTodo={addTodo}
        inputChange={inputChange}
        todoText={todoText}
        todoList={todoList}
        deleteTodoItem={deleteTodoItem}
      />
    );
  }
  // redux-thunk
  // componentDidMount() {
  //   const action = getTodoList();
  //   store.dispatch(action);
  // }
  // redux-saga
  componentDidMount() {
    const action = getSaga();
    store.dispatch(action);
  }
  // storeChange() {
  //   this.setState(store.getState());
  // }
}
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodoItem(index) {
      const action = deleteTodoItemAction(index);
      dispatch(action);
    },
    addTodo(value) {
      const action = addTodoAction(value);
      dispatch(action);
    },
    inputChange(e) {
      const action = changeInputAction(e.target.value);
      store.dispatch(action);
    },
  };
};

// mapStateToProps会实现store的订阅，即store.subscribe()
export default connect(mapStateToProps, mapDispatchToProps)(AntdDemo);
