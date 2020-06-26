import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from './Redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistedStore}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

