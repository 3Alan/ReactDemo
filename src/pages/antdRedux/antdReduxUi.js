import React from "react";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Input, List, Button, Row, Col } from "antd";
const { Search } = Input;


// 采用无状态组件的方式，不继承React的Component，可以提升性能
const AntdReduxUi = ({addTodo, inputChange, todoText, todoList, deleteTodoItem }) => {
  return (
    <div className="container">
      <Search
        placeholder="add something you want to do"
        enterButton="add"
        onSearch={addTodo}
        onChange={inputChange}
        style={{ margin: "60px 0 20px 0", width: "300px" }}
        value={todoText}
      />
      <List
        bordered
        dataSource={todoList}
        style={{ width: "300px" }}
        renderItem={(item, index) => (
          <List.Item>
            <Row style={{ width: "100%" }}>
              <Col span={20}>{item}</Col>
              <Col span={4}>
                <Button
                  type="primary"
                  onClick={() => deleteTodoItem(index)}
                  icon={<DeleteOutlined />}
                ></Button>
                {/* <Button type="primary" onClick={this.deleteTodoItem.bind(this, index)} icon={<DeleteOutlined />}></Button> */}
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AntdReduxUi;
