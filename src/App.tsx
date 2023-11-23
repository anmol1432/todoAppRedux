import React from 'react';
import Home from './pages/Home/Home';
import { store } from './store/store'
import { Provider } from 'react-redux'
import './App.css';

function App() {
  return (
    <>
      <Provider store={store} >
        <Home title={'To Do List'} />
      </Provider >
    </>
  );
}

export default App;
