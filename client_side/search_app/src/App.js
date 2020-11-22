import React from 'react';
import './App.css';
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Routing from './Routes/Routing';

function App() {
  return (
    <div>
      <Navbar />
    <div className="App">
      <Routing />
    </div>
    </div>
  );
}

export default App;
