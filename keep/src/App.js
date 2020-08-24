import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Frame from './components/Body/Frame';
function App() {
  return (
    <div className="header">
      <Navbar />
      <Frame />
    </div>
  );
}

export default App;
