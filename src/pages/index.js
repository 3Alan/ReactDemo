import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import AntdRedux from './antdRedux/antdRedux';
import ReactTodo from './ReactTodo/todoHeader';
import Article from './Article/article';
import LifeCycle from './lifeCycle';
import ArticleContent from './Article/articleContent';

import { Menu } from 'antd';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'antd',
    };
  }
  render() {
    return (
      <>
        {/* 重定向到antdRedux页面 */}
        <Redirect to="/antdRedux/" />
        <Menu
          onClick={this.selectMenu.bind(this)}
          mode="horizontal"
          className="menu-navigation"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="antd">
            <Link to="/antdRedux/">antd+redux</Link>
          </Menu.Item>
          <Menu.Item key="todo">
            <Link to="/todoDemo/">react</Link>
          </Menu.Item>
          <Menu.Item key="article">
            <Link to="/article/">article</Link>
          </Menu.Item>
          <Menu.Item key="lifeCycle">
            <Link to="/lifeCycle/">lifeCycle</Link>
          </Menu.Item>
        </Menu>
        {/*         exat可以精致匹配路由，不加之前/antdRedux/xxx也可以匹配到该组件，
        加了之后只有当/antdRedux/时才能匹配该组件 */}
        <Route path="/antdRedux/" exact component={AntdRedux}></Route>
        <Route path="/todoDemo/" component={ReactTodo}></Route>
        <Route path="/article" exact component={Article}></Route>
        <Route path="/lifeCycle" exact component={LifeCycle}></Route>
        <Route
          path="/article/:articleContent"
          component={ArticleContent}
        ></Route>
      </>
    );
  }
  selectMenu(e) {
    this.setState({
      current: e.key,
    });
  }
}

export default Index;
