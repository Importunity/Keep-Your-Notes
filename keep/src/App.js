import React, { useEffect } from 'react';
import './App.css';

// main page
import Main from './components/Main/Main';

import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';



function App() {
  //console.log(store.dispatch(loadUser));
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
    <div>
      <Main  />
    </div>
    </Provider>
  );
}

export default App;
 