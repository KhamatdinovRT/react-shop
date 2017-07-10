import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(<Router>
                  <MuiThemeProvider>
                    <App />
                  </MuiThemeProvider>
                </Router>, document.getElementById('root'));
registerServiceWorker();
