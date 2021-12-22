import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import App from './App';

import { ThemeProvider } from '@mui/material';
import myTheme from './themes/myTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <div className="main" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>

        <div className="topSpacer" style={{
          flex: '2',
          // border: '1px solid red'
        }} />

          <App />

        <div className='bottomSpacer' style={{
            flex: '3',
            // border: '1px solid red'
          }} />

      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);