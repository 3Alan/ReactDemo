import React, { Component, Fragment } from 'react';
import '../../style/style.css';
import TodoItem from '../ReactTodo/todoItem';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      todoList: ['studying', 'shopping'],
    }
  }
  componentWillMount() {
    console.log('componentWillMount----------');
    // 废除了
  }
  async componentDidMount() {
    const res = await axios.get('https://www.easy-mock.com/mock/5e92857d54ca0e18b5971f74/example/mock')
    console.log(res);
    
    console.log('componentDidMount----------');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate-------------');
    return true;
    // return false 是不会渲染（render()）
  }
  componentWillUpdate() {
    console.log('componentWillUpdate--------------');
    // 废除了
  }
  componentDidUpdate() {
    console.log('componentDidUpdate------------');
    
  }
  render() {
    console.log('render------------');
    return (
      <Fragment>
        {/* 注释的写法 */}
        <div>
          <label htmlFor="addItem">TODO：</label>
          <input id="addItem" className="newItem" value={this.state.inputValue} onChange={this.inputChange.bind(this)}></input>
          <button onClick={this.addToDo.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.todoList.map((item, index) => {
              return (
              // <li
              //   key={index+item} 
              //   onClick={this.deleteItem.bind(this, index)}
              //   dangerouslySetInnerHTML={{__html:item}}
              // >
              // </li>
              <TodoItem 
                key={index+item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
                content={item}
              />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  addToDo() {
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: ''
    });
  }
  deleteItem(index) {
    const todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({
      todoList,
    })
  }
}

export default App;