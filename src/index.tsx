//import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@material-ui/core';
//import { ThemeProvider } from '@material-ui/core/styles';
import GlobalProvider from './utilities/GlobalProvider'
import axios from 'axios';

const api = axios.create();

ReactDOM.render(
/*   <React.StrictMode> */
/*     <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider> */
    <GlobalProvider axiosInstance={api}>
      <CssBaseline />
      <App />
    </GlobalProvider>
/*   </React.StrictMode> */,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();