import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import reportWebVitals from './reportWebVitals';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
)