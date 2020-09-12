import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Frame from './components/Body/Frame';

// the provider helps us share states throughout the components
import {Provider} from 'react-redux';
import store from './store';

// load user
import { loadUser } from './actions/authActions';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
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
