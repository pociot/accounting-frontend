import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Auth>
        <App title="Home Construction Budgeting" />
      </Auth>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
