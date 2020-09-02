import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Frame from './components/Body/Frame';
import Login from './components/Main/Login';

// the provider helps us share states throughout the components
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="header">
      <Navbar />
      <Frame />
    </div>
    </Provider>
  );
}

export default App;
