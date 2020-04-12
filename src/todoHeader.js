import React, { Component, Fragment } from "react";
import "./style/todoHeader.css";
import TodoItem from "./todoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ['shopping'],
      todoText: '',
      toggleList: true,
    };
    this.keyPressEvent = this.keyPressEvent.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div className="title-container">
          <label htmlFor="newTodo" className="title">
            todos
          </label>
          <input
            value={this.state.todoText}
            id="newTodo"
            placeholder="Add something you need to do"
            onKeyUp={this.keyPressEvent}
            onChange={this.changeEvent}
          ></input>
        </div>
        <div className="todoList">
          <div className="todoListTitle" onClick={this.toggleList}>
            todoList
          </div>

          <div className={this.state.toggleList ? "showList" : "hideList"}>
            <TransitionGroup>
              {this.state.todoList.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={500}
                    classNames="todo-item"
                    unmountOnExit
                    key={index + item}
                  >
                    <TodoItem
                      className={
                        this.state.toggleList ? "showList" : "hideList"
                      }
                      content={item}
                      deleteItem={this.deleteItem}
                      index={index}
                    />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
        </div>
      </Fragment>
    );
  }
  keyPressEvent(e) {
    if (e.keyCode === 13 && this.state.todoText) {
      this.setState({
        todoList: [...this.state.todoList, this.state.todoText],
        todoText: "",
      });
    }
  }
  changeEvent(e) {
    this.setState({
      todoText: e.target.value,
    });
  }
  deleteItem(index) {
    const { todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({
      todoList,
    });
  }
  toggleList() {
    this.setState({
      toggleList: !this.state.toggleList,
    });
  }
}

export default TodoHeader;
