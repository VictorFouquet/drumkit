import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drumkit from './components/Drumkit'
import Signature from './components/Signature'

function App() {
  return (
    <div className="App">
      <Drumkit />
      <footer>
        <Signature />
      </footer>
    </div>
  );
}

export default App;
