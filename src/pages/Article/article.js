import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: ["Vue Articles", "React Articles", "Angular Articles"],
    };
  }
  render() {
    return (
      <div>
        <List
          size="large"
          bordered
          dataSource={this.state.articleList}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/article/${item}`}>{item}</Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props);

    const { articleContent } = this.props.match.params;
    this.setState({
      articleContent,
    });
  }
}

export default Article;
