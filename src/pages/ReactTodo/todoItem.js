import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/todoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps() {
    console.log('%cchild---------componentWillReceiveProps', 'color:red');
  }

  componentWillUnmount() {
    console.log('%cchild---------componentWillUnmount', 'color:red');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content;
    // 防止更新影响性能
  }

  render() {
    console.log('%cchild---------render', 'color:red');

    return (
      <div className="todoItem" onClick={this.handleClick}>
        {this.props.content}
      </div>
    );
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};

TodoItem.defaultProps = {
  status: '未完成',
};

export default TodoItem;
