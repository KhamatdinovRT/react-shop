import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import { logger } from 'redux-logger';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const middleware = [logger];

const store = createStore (
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(<Provider store={store}>
                  <Router>
                    <MuiThemeProvider>
                      <App />
                    </MuiThemeProvider>
                  </Router>
                </Provider>, document.getElementById('root'));
registerServiceWorker();