import React, { Component } from 'react';
import { Button } from 'antd';

class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{padding: '10px 40px'}}>
        {this.state.articleContent}
        <Button onClick={this.back.bind(this)} style={{float: 'right'}}>back</Button>
      </div>
    );
  }
  back() {
    this.props.history.go(-1);
  }
  componentDidMount() {
    const { articleContent } = this.props.match.params;
    console.log('----------');
    
    this.setState({
      articleContent
    })
    
  }
}
 
export default ArticleContent;