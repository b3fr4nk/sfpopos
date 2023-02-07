import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet/>
    </div>
  );
}

export default App;
