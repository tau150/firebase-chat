import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'
import { Provider as SessionProvider } from './session/context'

ReactDOM.render(
    <SessionProvider>
        <App />
    </SessionProvider>,
  document.getElementById('root')
);

