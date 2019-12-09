import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import Routes from './router'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
