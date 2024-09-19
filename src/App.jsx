import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import './App.css';

function App() {
  return (
    <Router>
      <MainRouter />
      <h1>Test heading</h1>
    </Router>
  );
}

export default App;
