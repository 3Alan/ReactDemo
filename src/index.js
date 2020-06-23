import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/index';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
  <Router>
    <Provider store={store}>
      {/* 包裹需要使用store的组件 */}
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
